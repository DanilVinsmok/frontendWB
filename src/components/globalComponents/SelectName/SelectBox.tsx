import styles from './SelectBox.module.scss'
import '../../../sours/icon/style.css'
import { useState } from 'react'
import useHoverAndClick from '../../../Hooks/useHoverAndClick'

interface IItem {
    children: string,
    handlerClick: (newCurrent: string) => void,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    current: string,
}

function Item(props: IItem) {
    const hovered = useHoverAndClick('#e8e8e8', '#bdbdbd', false)

    const styleClick = (props.current === props.children) ? '#bdbdbd' : '#e8e8e8'
    hovered.style.background = (hovered.style.background === '#bdbdbd') ? '#bdbdbd' : styleClick

    return (
        <div
            className={styles['select-item']}
            onMouseEnter={hovered.handlers[0]}
            onMouseLeave={hovered.handlers[1]}
            style={hovered.style}
            onClick={() => {
                props.handlerClick(props.children)
                props.setOpen(false)
            }}
        >
            {props.children}
        </div>
    )
}

function Items(
    handlerClick: (newCurrent: string) => void,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    current: string,
    data: string[]
) {
    return (data.map((item, index) =>
        <Item
            key={index}
            handlerClick={handlerClick}
            setOpen={setOpen}
            current={current}
        >
            {item}
        </Item>
    ))
}

interface ISelectBox {
    current: string,
    handlerClick: (newCurrent: string) => void,
    data: string[]
}
export default function SelectBox(props: ISelectBox) {
    const [open, setOpen] = useState(false)

    const items = Items(props.handlerClick, setOpen, props.current, props.data)

    const hovered = useHoverAndClick('#e8e8e8', '#bdbdbd', false)

    let styleSelectBody = { display: 'none' }
    styleSelectBody = open ? { display: 'block' } : { display: 'none' }
    return (
        <div className={styles['select']}>
            <div className={styles['select-header']}>
                <div className={styles['select-current']}>{props.current}</div>
                <div
                    className={styles['select-icon']}
                    onMouseEnter={hovered.handlers[0]}
                    onMouseLeave={hovered.handlers[1]}
                    style={hovered.style}
                    onClick={() => setOpen(!open)}
                >
                    <i className='ic_arrow_down'></i>
                </div>
            </div>
            <div
                className={styles['select-body']}
                style={styleSelectBody}
            >
                {items}
            </div>
        </div>
    )
}