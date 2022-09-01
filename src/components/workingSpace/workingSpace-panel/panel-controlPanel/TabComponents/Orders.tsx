import { useContext } from 'react'
import WorkingSpaceContext from '../../../../../Context/WorkingSpaceContext'
import styles from '../ControlPanel.module.scss'

function GetOrders() {
    return (
        <div>GetOrders</div>
    )
}
function UpdateOrders() {
    return (
        <div>UpdateOrders</div>
    )
}
function MethodOrders() {
    const value = useContext(WorkingSpaceContext)
    const state = value.controlPanelState
    if (state === 'Получить')
        return (<GetOrders />)
    else if (state === 'Обновить')
        return (<UpdateOrders />)
    else return (<div>Этот компонент пока не создан</div>)
}

export default function Orders() {
    return (
        <div className={styles['controlPanel-']}>
            <MethodOrders />
        </div>
    )
}