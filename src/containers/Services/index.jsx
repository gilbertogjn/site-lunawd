import { Description, Subtitle } from "../../styles";
import { ServicesSection } from "./style";
import blog from "../../img/blog.png";
import institucional from "../../img/institucional.png";
import landing from "../../img/landing-page.png";

const Services = () => (
  <ServicesSection id="services">
    <Subtitle>Serviços</Subtitle>
    <Description>
      Conheça nossos serviços de desenvolvimento de sites
    </Description>
    <ul>
      <li>
        <img src={institucional} />
        <h3>Sites Institucionais</h3>
        <Description>
          Trazemos a identidade da sua marca à vida digital com sites
          institucionais que refletem sua missão, visão e valores. Criamos
          experiências online cativantes que destacam sua marca, oferecem
          informações relevantes e promovem engajamento com seu público-alvo.
          Desde a concepção até a implementação, nossa equipe dedicada trabalha
          para garantir que seu site institucional seja uma poderosa ferramenta
          de comunicação e representação da sua empresa na web.
        </Description>
      </li>
      <li>
        <img src={blog} />
        <h3>Blogs e Portais de Notícias</h3>
        <Description>
          Destaque-se na paisagem digital com nosso serviço especializado em
          blogs e portais de notícias. Criamos plataformas dinâmicas e
          intuitivas que permitem a publicação de conteúdo relevante de forma
          fácil e eficiente. Desde a configuração inicial até a implementação de
          recursos avançados, somos comprometidos em fornecer soluções
          personalizadas que ampliem sua presença online, atraiam leitores e
          promovam a disseminação de informações impactantes
        </Description>
      </li>
      <li>
        <img src={landing} />
        <h3>Landing Pages</h3>
        <Description>
          Capte a atenção do seu público-alvo com landing pages que convertem.
          Desenvolvemos landing pages personalizadas que
          destacam os benefícios exclusivos do seu produto ou serviço. Desde um
          design atraente até uma mensagem persuasiva, cada detalhe é
          cuidadosamente elaborado para garantir uma experiência envolvente e
          orientada para a ação. Maximize suas taxas de conversão e impulsione o
          crescimento do seu negócio com landing pages otimizadas para
          resultados.
        </Description>
      </li>
    </ul>
  </ServicesSection>
);

export default Services;
