import styles from './Panel.module.scss'
import { ScreenVersion } from '../../../../Enums/ScreenEnums'
import Tab from '../menu-tap/Tab'
import { MenuEnum } from '../../../../Enums/MenuEnums'

interface PanelProps {
    version?: ScreenVersion
}

export default function Panel({ version = ScreenVersion.DESKTOP }: PanelProps) {
    return (
        <div className={styles['menu-panel__' + version]}>
            <h2>Menu</h2>
            <Tab returnClick={MenuEnum.Brands} >Бренды</Tab>
            <Tab returnClick={MenuEnum.Orders}>Заказы</Tab>
            <Tab returnClick={MenuEnum.Report}>Отчеты</Tab>
            <Tab returnClick={MenuEnum.Warehouse}>Склад</Tab>
        </div>
    )
}