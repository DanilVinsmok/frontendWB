import { createContext } from "react";
import { MenuEnum } from '../Enums/MenuEnums'

interface IWorkingSpaceContext {
    menuState: MenuEnum,
    setMenuState: (newMenuSate: MenuEnum) => void,
    controlPanelState: string,
    setControlPanelState: (newControlPanelState: string) => void
}
const WorkingSpaceContext = createContext<Partial<IWorkingSpaceContext>>({})

export default WorkingSpaceContext