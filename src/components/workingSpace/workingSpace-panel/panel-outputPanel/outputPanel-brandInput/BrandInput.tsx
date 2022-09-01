import { IBrandDto } from '../../../../../Api/dto/IBrand'
import styles from './BrandInput.module.scss'
import '../../../../../sours/icon/style.css'
import useInput from '../../../../../Hooks/useInput'
import useBrand from '../../../../../Hooks/useBrand'


interface IBrandInput {
    value: IBrandDto
}


export default function BrandInput(props: IBrandInput) {
    const { value } = props

    const title = useInput(value.title)
    const apikeyone = useInput(value.apikeyone)
    const apikeytwo = useInput(value.apikeytwo)

    const { update } = useBrand()



    const updateBrand: IBrandDto = {
        id: value.id,
        title: title.value,
        apikeyone: apikeyone.value,
        apikeytwo: apikeytwo.value,
        expirationdate: value.expirationdate
    }


    return (
        <>
            <div className={styles['brandItem']}>
                <div className={styles['brandItem-header']} >
                    <input {...title} type="text" className={styles['brandItem-title']} />
                </div>
                <div className={styles['brandItem-body']} >
                    Id:<div className={styles['brandItem-id']}>{value.id}</div>
                    <div>Api keys:</div><div className={styles['brandItem-apiKeys']}>
                        <div className={styles['key']}>
                            Key:<input {...apikeyone} type="text" className={styles['apiKeys_One']} />
                        </div>
                        <div className={styles['key']}>
                            Key:<input {...apikeytwo} type="text" className={styles['apiKeys_Two']} />
                        </div>
                    </div>
                </div>
            </div>
            <button className={styles['controlPanel-submit']}>
                <div
                    onClick={() => update(updateBrand)}
                >Отправить запрос</div>
            </button>
        </>
    )
}