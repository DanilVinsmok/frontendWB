import { useContext } from 'react'
import WorkingSpaceContext from '../../../../../Context/WorkingSpaceContext'
import styles from '../ControlPanel.module.scss'

function DemandRateReport() {
    return (
        <div>DemandRateReport</div>
    )
}
function WarehouseReport() {
    return (
        <div>WarehouseReport</div>
    )
}
function FullReport() {
    return (
        <div>FullReport</div>
    )
}
function ABCReport() {
    return (
        <div>ABCReport</div>
    )
}

function MethodReports() {
    const value = useContext(WorkingSpaceContext)
    const state = value.controlPanelState
    if (state === 'Скорость спроса')
        return (<DemandRateReport />)
    else if (state === 'Склад')
        return (<WarehouseReport />)
    else if (state === 'Полный отчет')
        return (<FullReport />)
    else if (state === 'ABC Анализ')
        return (<ABCReport />)
    else return (<div>Этот компонент пока не создан</div>)
}

export default function Report() {
    return (
        <div className={styles['controlPanel-']}>
            <MethodReports />
        </div>
    )
}