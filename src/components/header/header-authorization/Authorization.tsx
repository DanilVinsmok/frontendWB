import styles from './Authorization.module.scss'
import { ScreenVersion } from '../../../Enums/ScreenEnums'
import useHoverAndClick from '../../../Hooks/useHoverAndClick'

interface AuthorizationProps {
    role?: string,
    version: ScreenVersion,
}

export default function Authorization(props: AuthorizationProps) {
    const { version } = props

    const hovered: {
        handlers: (() => void)[],
        style: {
            background: string;
        }
    } = useHoverAndClick('#e8e8e8', '#bdbdbd', true, false)

    return (
        <div
            className={styles['header-authorization__' + version]}
            onMouseEnter={hovered.handlers[0]}
            onMouseLeave={hovered.handlers[1]}
            onClick={hovered.handlers[2]}
            style={hovered.style}
        >
        </div>
    )
}