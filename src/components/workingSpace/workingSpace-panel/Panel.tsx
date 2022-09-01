import { useContext } from 'react'
import GlobalContext from '../../../Context/GlobalContext'
import BrandsContext from '../../../Context/BrandsContext'
import ControlPanel from './panel-controlPanel/ControlPanel'
import OutputPanel from './panel-outputPanel/OutputPanel'
import styles from './Panel.module.scss'
import useBrandsContext from '../../../Hooks/useBrandsContext'

export default function Panel() {
    const value = useContext(GlobalContext)

    let style = {}
    style = value.isBlocked ? { width: '92%' } : { width: '100%' }

    const brandsContext = useBrandsContext()


    return (
        <div className={styles['workingSpace-panel']}
            style={style}
        >
            <BrandsContext.Provider value={brandsContext}>
                <ControlPanel></ControlPanel>
                <OutputPanel></OutputPanel>
            </BrandsContext.Provider>
        </div>
    )
}