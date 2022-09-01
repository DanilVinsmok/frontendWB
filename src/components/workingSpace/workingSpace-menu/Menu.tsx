import { useContext } from 'react'
import GlobalContext from '../../../Context/GlobalContext'
import Panel from './menu-panel/Panel'
import styles from './Menu.module.scss'

export default function Menu() {
    const value = useContext(GlobalContext)

    const openMenu = {
        animationName: styles['menu-show-open'],
        left: '0',
        position: 'relative'
    }
    const closeMenu = {
        animationName: styles['menu-show-close'],
        left: '-8%',
        position: 'absolute'
    }

    let style = {}
    style = value.isBlocked ? openMenu : closeMenu

    return (
        <div className={styles['workSpace-menu']} style={style}>
            <Panel></Panel>
        </div>
    )
}