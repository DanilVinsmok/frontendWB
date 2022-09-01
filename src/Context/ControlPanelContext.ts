import { createContext } from "react";

let defaultValue = {
    setState: (newState: string) => console.log('[eq]'),
    state: 'ddd'
}

const ControlPanelContext = createContext(defaultValue)

export default ControlPanelContext