import { useContext } from 'react'
import { IBrandDto } from '../../../../Api/dto/IBrand'
import BrandsContext from '../../../../Context/BrandsContext'
import WorkingSpaceContext from '../../../../Context/WorkingSpaceContext'
import { MenuEnum } from '../../../../Enums/MenuEnums'
import BrandInput from './outputPanel-brandInput/BrandInput'
import BrandItem from './outputPanel-brandItem/BrandItem'
import styles from './OutputPanel.module.scss'

export default function OutputPanel() {

    function ResponseBlock() {
        const value = useContext(WorkingSpaceContext)
        const brandsContext = useContext(BrandsContext)

        if (value.menuState === MenuEnum.Brands && brandsContext.brands !== undefined) {
            if (value.controlPanelState === 'Создать') {
                const data: IBrandDto[] = brandsContext.brands?.created
                const brandsList = data.map((item, index) => {
                    return (
                        <BrandItem
                            key={index}
                            value={item}
                        ></BrandItem>)
                })
                return (
                    <div>
                        {brandsList}
                    </div>)
            }
            else if (value.controlPanelState === 'Получить') {
                const data: IBrandDto[] = brandsContext.brands?.selected
                const brandsList = data.map((item, index) => {
                    return (
                        <BrandItem
                            key={index}
                            value={item}
                        ></BrandItem>)
                })
                return (
                    <div>
                        {brandsList}
                    </div>)
            }
            else if (value.controlPanelState === 'Обновить') {
                const data: IBrandDto[] = brandsContext.brands?.updated
                const brandsList = data.map((item, index) => {
                    return (
                        <BrandInput
                            key={index}
                            value={item}
                        ></BrandInput>
                    )
                })
                return (
                    <div>
                        {brandsList}
                    </div>)
            } else if (value.controlPanelState === 'Удалить') {
                const data: IBrandDto[] = brandsContext.brands?.deleted
                const brandsList = data.map((item, index) => {
                    return (
                        <BrandItem
                            key={index}
                            value={item}
                        ></BrandItem>)
                })
                return (
                    <div>
                        {brandsList}
                    </div>)
            }
        }
        return (<></>)
    }

    return (
        <div className={styles['outputPanel']}>
            <ResponseBlock></ResponseBlock>
        </div>
    )
}