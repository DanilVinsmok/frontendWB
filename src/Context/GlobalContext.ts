import { createContext } from "react";

interface IGlobalContext {
    block: () => void,
    isBlocked: boolean
}


const GlobalContext = createContext<Partial<IGlobalContext>>({})

export default GlobalContext