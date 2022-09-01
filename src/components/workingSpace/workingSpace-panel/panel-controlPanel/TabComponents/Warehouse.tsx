import { useContext } from 'react'
import WorkingSpaceContext from '../../../../../Context/WorkingSpaceContext'
import styles from '../ControlPanel.module.scss'

function UpdateWarehouse() {
    return (
        <div>UpdateWarehouse</div>
    )
}
function MethodWarehouse() {
    const value = useContext(WorkingSpaceContext)
    if (value.controlPanelState === 'Обновить')
        return (<UpdateWarehouse />)
    else return (<div>Этот компонент пока не создан</div>)
}
export default function Warehouse() {
    return (
        <div className={styles['controlPanel-']}>
            <MethodWarehouse />
        </div>
    )
}