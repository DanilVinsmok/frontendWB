import { createContext } from "react";
import { IBrandDto } from "../Api/dto/IBrand";

interface IBrandsContext {
    brands: {
        all: IBrandDto[];
        created: IBrandDto[];
        deleted: IBrandDto[];
        selected: IBrandDto[];
        updated: IBrandDto[];
    };
    create: (brand: IBrandDto) => void;
    delete: (brand: IBrandDto) => void;
    select: (brand: IBrandDto[]) => void;
    updated: (brand: IBrandDto[]) => void;
    setFetched: (brands: IBrandDto[]) => void;

}

const BrandsContext = createContext<Partial<IBrandsContext>>({})

export default BrandsContext