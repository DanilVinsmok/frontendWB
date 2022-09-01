import styles from './ButtonMenu.module.scss'
import '../../../sours/icon/style.css'
import useHoverAndClick from '../../../Hooks/useHoverAndClick';
import { useContext } from 'react';
import GlobalContext from '../../../Context/GlobalContext';



export default function ButtonMenu() {
    const hovered = useHoverAndClick('#e8e8e8', '#bdbdbd')
    const value = useContext(GlobalContext)
    return (
        <button
            className={styles['header-buttonMenu']}
            onMouseEnter={hovered.handlers[0]}
            onMouseLeave={hovered.handlers[1]}
            onClick={() => {
                hovered.handlers[2]()
                if (value.block) value.block()
            }}
            style={hovered.style}
        >
            <i className='ic_menu'></i>
        </button>
    )
}