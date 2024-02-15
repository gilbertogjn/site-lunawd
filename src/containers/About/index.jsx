import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AboutDescription, AboutSection } from "./style";
import profile from "../../img/profile.jpg";

const About = () => (
  <AboutSection id="about">
    <div>
      <h2>Gilberto Garcia</h2>
      <h3>Desenvolvedor Web</h3>
      <AboutDescription>
        Sou formado em Análise e Desenvovlimento de Sistemas pela Universidade
        Metodista de São Paulo. Desde 2010 trabalho com desenvovlimento web e ao
        longo destes anos já pude contribuir com diversas empresas, instituições
        e pessoas na criação de websites. Pude aprender muito o feedback dos
        meus clientes e pretendo aplicar todos esses conhecimentos em fortalecer
        a presença digital de sua empresa ou marca.
      </AboutDescription>
      <h3>Entre em contato:</h3>
      <a href="mailto:gilbertogjn@gmail.com">
        gilbertogjn@gmail.com
      </a>
      <span>
        <a href="">
          <FaLinkedin />{" "}
        </a>
        <a href="">
          <FaGithub />{" "}
        </a>
      </span>
    </div>
    <div>
      <img src={profile} alt="Gilberto Garcia" />
    </div>
  </AboutSection>
);

export default About;
