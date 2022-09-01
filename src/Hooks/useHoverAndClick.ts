import { useState } from "react"

export default function useHoverAndClick(color: string, changeColor: string, clickProcessing: boolean = true, defaultClick: boolean = true) {

    const [isHovered, setHovered] = useState(false)
    const [isClick, setClick] = useState(defaultClick)

    const handlerMouseEnter = () => { setHovered(!isHovered) }
    const handlerMouseLeave = () => { setHovered(!isHovered) }
    const handlerClick = () => { setClick(!isClick) }

    let style = { background: color }
    if (clickProcessing)
        style.background = (isHovered || isClick) ? changeColor : color
    else
        style.background = isHovered ? changeColor : color

    return {
        handlers: [handlerMouseEnter, handlerMouseLeave, handlerClick],
        style: style
    }
}