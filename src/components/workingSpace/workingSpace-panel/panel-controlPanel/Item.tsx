import { useContext } from 'react'
import WorkingSpaceContext from '../../../../Context/WorkingSpaceContext'
import useHoverAndClick from '../../../../Hooks/useHoverAndClick'
import styles from './ControlPanel.module.scss'

interface ItemProps {
    callback: string,
    children: string
}

export default function Item(props: ItemProps) {

    const hovered = useHoverAndClick('#e8e8e8', '#bdbdbd', false)
    const value = useContext(WorkingSpaceContext)

    const styleClick = (props.callback === value.controlPanelState) ? '#bdbdbd' : '#e8e8e8'
    hovered.style.background = (hovered.style.background === '#bdbdbd') ? '#bdbdbd' : styleClick

    return (
        <div
            onMouseEnter={hovered.handlers[0]}
            onMouseLeave={hovered.handlers[1]}
            style={hovered.style}
            className={styles['panel-tabPanel-item']}
            onClick={() => value.setControlPanelState ? value.setControlPanelState(props.callback) : console.log('что то то не так')}

        >
            {props.children}
        </div>
    )
}