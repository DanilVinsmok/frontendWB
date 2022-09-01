import { useContext } from 'react';
import WorkingSpaceContext from '../../../../Context/WorkingSpaceContext';
import { MenuEnum } from '../../../../Enums/MenuEnums';
import useHoverAndClick from '../../../../Hooks/useHoverAndClick';
import { RequestsParamsData } from '../../../../StaticData/RequestsParamsData';
import styles from './Tab.module.scss'

interface TabProps {
    children: string,
    returnClick: MenuEnum
}

export default function Tab(props: TabProps) {
    const hovered = useHoverAndClick('#e8e8e8', '#bdbdbd', false)

    const value = useContext(WorkingSpaceContext)

    const styleClick = (props.returnClick === value.menuState) ? '#bdbdbd' : '#e8e8e8'
    hovered.style.background = (hovered.style.background === '#bdbdbd') ? '#bdbdbd' : styleClick

    return (
        <div className={styles['menu-tab']}
            onMouseEnter={hovered.handlers[0]}
            onMouseLeave={hovered.handlers[1]}
            style={hovered.style}
            onClick={() => {
                value.setMenuState ? value.setMenuState(MenuEnum[props.returnClick]) : console.log('что то то не так')
                value.setControlPanelState ? value.setControlPanelState(RequestsParamsData[props.returnClick][0]) : console.log('что то то не так')
            }}
        >
            <h3>{props.children}</h3>
        </div>
    )
}