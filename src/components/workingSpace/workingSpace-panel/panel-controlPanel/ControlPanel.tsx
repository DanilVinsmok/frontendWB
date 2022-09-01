import { useContext } from 'react'
import WorkingSpaceContext from '../../../../Context/WorkingSpaceContext'
import { MenuEnum } from '../../../../Enums/MenuEnums'
import { RequestsParamsData } from '../../../../StaticData/RequestsParamsData'
import styles from './ControlPanel.module.scss'
import Item from './Item'
import Brands from './TabComponents/Brads'
import Orders from './TabComponents/Orders'
import Report from './TabComponents/Report'
import Warehouse from './TabComponents/Warehouse'


function CreateTabBlock() {
    const value = useContext(WorkingSpaceContext)
    const reqBlocks = RequestsParamsData[value.menuState ? value.menuState : MenuEnum.Brands].map((item, index) => {
        return (
            <Item
                key={index + item}
                callback={item}
            >{item}</Item>)
    })
    return (reqBlocks)
}

function GetQueryBlock() {
    const value = useContext(WorkingSpaceContext)
    const state = value.menuState ? value.menuState : MenuEnum.Brands
    if (state === MenuEnum.Brands)
        return (<Brands />)
    else if (state === MenuEnum.Orders)
        return (<Orders />)
    else if (state === MenuEnum.Report)
        return (<Report />)
    else if (state === MenuEnum.Warehouse)
        return (<Warehouse />)
    else
        return (<div>Этот компонент пока не создан</div>)
}

export default function ControlPanel() {
    const tab = CreateTabBlock()
    const tabComponents = GetQueryBlock()

    return (
        <div className={styles['panel-controlPanel']}>
            <div className={styles['panel-tabPanel']}>
                {tab}
            </div>
            <div className={styles['panel-queryPanel']}>
                {tabComponents}
            </div>
        </div>
    )
}