import { ContainerTop, Logo, MenuTop } from "./style"
import logoLuna from '../../img/Logo-Luna-horizontal.svg'

const Menu = () => (
    <MenuTop>
        <ContainerTop>
            <a href="#hero"><Logo src={logoLuna} /></a>
            <ul>
                <li>
                    <a href="#services">Serviços</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#about">Sobre</a>
                </li>
            </ul>
        </ContainerTop>
    </MenuTop>
)

export default Menu