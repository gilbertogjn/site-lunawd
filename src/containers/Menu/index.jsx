import { ContainerTop, Logo, MenuTop } from "./style"
import logoLuna from '../../img/Logo-Luna-horizontal.svg'

const Menu = () => (
    <MenuTop>
        <ContainerTop>
            <a href="#hero"><Logo src={logoLuna} /></a>
            <ul>
                <li>
                    <a href="#">Serviços</a>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Sobre</a>
                </li>
            </ul>
        </ContainerTop>
    </MenuTop>
)

export default Menu