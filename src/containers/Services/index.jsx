import { Description, Subtitle } from "../../styles"
import { ServicesSection } from "./style"
import blog from '../../img/blog.png'
import institucional from '../../img/institucional.png'
import landing from '../../img/landing-page.png'

const Services = () => (
    <ServicesSection>
        <Subtitle>Serviços</Subtitle>
        <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit</Description>
        <ul>
            <li>
                <img src={institucional}/>
                <h3>Sites Institucionais</h3>
                <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit</Description>
            </li>
            <li>
                <img src={blog}/>
                <h3>Blogs e Portais de Notícias</h3>
                <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit</Description></li>
            <li>
                <img src={landing}/>
                <h3>Landing Pages</h3>
                <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit</Description>
            </li>
        </ul>
    </ServicesSection>
)

export default Services