import $host from "../http";
import { IBrand, IBrandDto } from "./dto/IBrand";

const getBrands = async () => {
    const response = await $host.get<IBrandDto[]>('api/brand')
    return response.data
}

const getBrand = async (title: string) => {
    const response = await $host.get<IBrandDto>(`api/brand/title?title=${title}`)
    return response.data
}

const createBrand = async (brand: IBrand) => {
    const response = (await $host.post<IBrandDto>(`api/brand`, { ...brand }))
    return response.data
}

const updateBrand = async (brand: IBrandDto) => {
    const response = (await $host.put<IBrandDto>(`api/brand`, { ...brand }))
    return response.data
}

const deleteBrand = async (title: string) => {
    const response = await $host.delete<IBrandDto>(`api/brand/title`, {
        data: { title: title }
    })
    return response.data
}

const backend = { getBrands, getBrand, createBrand, updateBrand, deleteBrand }
export default backend