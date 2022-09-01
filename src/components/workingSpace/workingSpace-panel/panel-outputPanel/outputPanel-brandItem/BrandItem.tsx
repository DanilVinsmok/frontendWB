import { IBrandDto } from '../../../../../Api/dto/IBrand'
import styles from './BrandItem.module.scss'
import '../../../../../sours/icon/style.css'
import { useState } from 'react'

interface IBrandItem {
    value: IBrandDto
}

export default function BrandItem(props: IBrandItem) {
    const { value } = props
    const [use, setUse] = useState(false)

    const styleBody = use ? { display: 'block' } : { display: 'none' }
    const styleHeader = use ? { border: '0', borderRadius: '0' } : {}
    const styleBrandItem = use ? { border: '1px solid black', borderRadius: '15px', marginBottom: '3px' } : {}

    return (
        <div className={styles['brandItem']} style={styleBrandItem}>
            <div className={styles['brandItem-header']} style={styleHeader}>
                <div className={styles['brandItem-title']}>{value.title}</div>
                <div
                    className={styles['brandItem-icon']}
                    onClick={() => setUse(!use)}
                >
                    <i className='ic_arrow_down'></i>
                </div>
            </div>
            <div className={styles['brandItem-body']} style={styleBody}>
                Id:<div className={styles['brandItem-id']}>{value.id}</div>
                Api keys:<div className={styles['brandItem-apiKeys']}>
                    <div className={styles['key']}>
                        Key:<div className={styles['apiKeys_One']}>{value.apikeyone}</div>
                    </div>
                    <div className={styles['key']}>
                        Key:<div className={styles['apiKeys_Two']}>{value.apikeytwo}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}