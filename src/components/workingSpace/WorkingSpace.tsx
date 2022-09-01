import styles from './WorkingSpace.module.scss'
import { ScreenVersion } from '../../Enums/ScreenEnums'
import Menu from './workingSpace-menu/Menu'
import Panel from './workingSpace-panel/Panel'
import { useState } from 'react'
import { MenuEnum } from '../../Enums/MenuEnums'
import WorkingSpaceContext from '../../Context/WorkingSpaceContext'


interface WorkingSpaceProps {
    version?: ScreenVersion
}

export default function WorkingSpace({ version = ScreenVersion.DESKTOP }: WorkingSpaceProps) {

    const [menuState, setMenuState] = useState(MenuEnum.Brands)
    const handlerClickMenu = (newStateMenu: MenuEnum) => setMenuState(newStateMenu)

    const [controlPanelState, setControlPanelState] = useState('Создать')
    const handlerClickControlPanel = (newStateControlPanel: string) => setControlPanelState(newStateControlPanel)

    const value = {
        menuState,
        setMenuState: handlerClickMenu,
        controlPanelState,
        setControlPanelState: handlerClickControlPanel
    }

    return (
        <WorkingSpaceContext.Provider value={value}>
            <div className={styles['workingSpace__' + version]}>
                <Menu></Menu>
                <Panel></Panel>
            </div>
        </WorkingSpaceContext.Provider>
    )
}