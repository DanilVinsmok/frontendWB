import { useContext } from "react"
import backend from "../Api/brandsApi"
import { IBrand, IBrandDto } from "../Api/dto/IBrand"
import BrandsContext from "../Context/BrandsContext"

export default function useBrand() {

    const brandsContext = useContext(BrandsContext)

    const selectBrand = (title: string) => {
        let selectBrand: IBrandDto[] = []
        if (title === 'all')
            selectBrand = brandsContext.brands ? brandsContext.brands.all : []
        else
            selectBrand = brandsContext.brands ? brandsContext.brands.all.filter(brand => (brand.title === title) ? brand : '') : []

        brandsContext.select ? brandsContext.select(selectBrand) : console.log([])
    }

    const setUpdateBrand = (title: string) => {
        let selectBrand = brandsContext.brands ? brandsContext.brands.all.filter(brand => (brand.title === title) ? brand : '') : []
        brandsContext.updated ? brandsContext.updated(selectBrand) : console.log([])
    }

    const createBrand = (brand: IBrand) => {
        backend.createBrand(brand)
            .then(brand => brandsContext.create ? brandsContext.create(brand) : console.log(brand))
    }

    const updateBrand = (brand: IBrandDto) => {
        backend.updateBrand(brand)
    }

    const deleteBrand = (title: string) => {
        backend.deleteBrand(title)
            .then(brand => brandsContext.delete ? brandsContext.delete(brand) : console.log(brand))
    }

    return {
        brands: brandsContext.brands,
        setUpdate: setUpdateBrand,
        delete: deleteBrand,
        select: selectBrand,
        create: createBrand,
        update: updateBrand,

    }
}