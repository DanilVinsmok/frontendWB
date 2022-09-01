import styles from './Header.module.scss'
import { ScreenVersion } from '../../Enums/ScreenEnums'
import ButtonMenu from './header-buttonMenu/ButtonMenu'
import Authorization from './header-authorization/Authorization'
import Title from './header-title/Title'

interface HeaderProps {
    version?: ScreenVersion
}

export default function Header({ version = ScreenVersion.DESKTOP }: HeaderProps) {
    const authorizationProps = {
        version: version
    }

    return (
        <div className={styles['header__' + version]} >
            <ButtonMenu />
            <Title></Title>
            <Authorization {...authorizationProps} />
        </div>
    )
}
