import { useEffect, useState } from "react"
import backend from "../Api/brandsApi"
import { IBrandDto } from "../Api/dto/IBrand"


export default function useBrandsContext() {

    const defaultValue: IBrandDto[] = []

    const [fetched, setFetched] = useState(defaultValue)
    const [created, setCreated] = useState(defaultValue)
    const [deleted, setDeleted] = useState(defaultValue)
    const [selected, setSelected] = useState(defaultValue)
    const [updated, setUpdate] = useState(defaultValue)



    const filterDeleted = (brands: IBrandDto[]) => {
        const idDeleted = deleted.map(item => item.id)
        return brands.filter(item => idDeleted.indexOf(item.id) === -1)
    }

    useEffect(() => {
        backend.getBrands()
            .then(brands => setFetched(brands))
    }, [])

    return {
        brands: {
            all: filterDeleted([...fetched, ...created]),
            created: filterDeleted(created),
            deleted: deleted,
            selected: selected,
            updated: updated
        },
        create: (brand: IBrandDto) => setCreated([...created, brand]),
        delete: (brand: IBrandDto) => setDeleted([...deleted, brand]),
        select: (brand: IBrandDto[]) => setSelected(brand),
        updated: (brand: IBrandDto[]) => setUpdate(brand),
        setFetched: (brands: IBrandDto[]) => setFetched(brands)
    }
}