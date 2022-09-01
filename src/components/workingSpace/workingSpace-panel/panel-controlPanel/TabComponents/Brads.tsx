import { useContext, useEffect, useState } from 'react'
import WorkingSpaceContext from '../../../../../Context/WorkingSpaceContext'
import useBrand from '../../../../../Hooks/useBrand'
import useInput from '../../../../../Hooks/useInput'
import SelectBox from '../../../../globalComponents/SelectName/SelectBox'
import styles from '../ControlPanel.module.scss'
import { IBrand } from '../../../../../Api/dto/IBrand'

function CreateBrand() {
    const { create } = useBrand()

    const title = useInput('')
    const apiKeyOne = useInput('')
    const apiKeyTwo = useInput('')

    const newBrand: IBrand = {
        title: title.value,
        apiKeyOne: apiKeyOne.value,
        apiKeyTwo: apiKeyTwo.value
    }

    return (
        <div className={styles['panel-createBrand']}>
            <input {...title} type="text" placeholder='title' className={styles['createBrand-title']} />
            <input {...apiKeyOne} type="text" placeholder='apiKeyOne' className={styles['createBrand-apiKeyOne']} />
            <input {...apiKeyTwo} type="text" placeholder='apiKeyTwo' className={styles['createBrand-apiKeyTwo']} />
            <button className={styles['controlPanel-submit']}
                style={{ margin: '0 0 0 10px' }}
                onClick={() => {
                    create(newBrand)
                }}
            >Создать бренд</button>
        </div>
    )
}

function GetBrand() {
    const { brands, select } = useBrand()

    const [titles, setTitles] = useState([''])
    const [brandCurrent, setBrandCurrent] = useState('')


    const itemClickHandler = (newCurrent: string) => { setBrandCurrent(newCurrent) }


    useEffect(() => {
        if (brands?.all)
            setTitles(brands?.all.map(brand => brand.title))
    }, [brands?.all])


    return (
        <>
            <SelectBox
                data={[...titles, 'all']}
                current={brandCurrent}
                handlerClick={itemClickHandler}
            ></SelectBox>
            <button className={styles['controlPanel-submit']}>
                <div
                    onClick={() => select(brandCurrent)}
                >Отправить запрос</div>
            </button>
        </>
    )
}

function UpdateBrand() {
    const { brands, setUpdate } = useBrand()
    const [titles, setTitles] = useState([''])
    const [brandCurrent, setBrandCurrent] = useState('')

    const itemClickHandler = (newCurrent: string) => { setBrandCurrent(newCurrent) }

    useEffect(() => {
        if (brands?.all)
            setTitles(brands?.all.map(brand => brand.title))
    }, [brands?.all])

    useEffect(() => {
        setUpdate(brandCurrent)
    }, [brandCurrent])

    return (
        <>
            <SelectBox
                data={[...titles]}
                current={brandCurrent}
                handlerClick={itemClickHandler}
            ></SelectBox>
        </>
    )
}
function DeleteBrand() {
    const use = useBrand()
    const [titles, setTitles] = useState([''])
    const [brandCurrent, setBrandCurrent] = useState('')

    const itemClickHandler = (newCurrent: string) => { setBrandCurrent(newCurrent) }

    useEffect(() => {
        if (use.brands?.all)
            setTitles(use.brands?.all.map(brand => brand.title))
    }, [use.brands?.all])

    return (
        <>
            <SelectBox
                data={[...titles]}
                current={brandCurrent}
                handlerClick={itemClickHandler}
            ></SelectBox>
            <button className={styles['controlPanel-submit']}>
                <div
                    onClick={() => use.delete(brandCurrent)}
                >Отправить запрос</div>
            </button>
        </>
    )
}

function MethodBrands() {
    const value = useContext(WorkingSpaceContext)
    const state = value.controlPanelState
    if (state === 'Создать')
        return (<CreateBrand />)
    else if (state === 'Получить')
        return (<GetBrand />)
    else if (state === 'Обновить')
        return (<UpdateBrand />)
    else if (state === 'Удалить')
        return (<DeleteBrand />)
    else return (<div>Этот компонент пока не создан</div>)
}
export default function Brands() {
    return (
        <div className={styles['controlPanel-brand']}>
            <MethodBrands />
        </div>
    )
}