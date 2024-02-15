import React from "react"
import { Grid, PortfolioSection } from "./style"
import { Description, Subtitle } from "../../styles"
import site1 from '../../img/site1.png'
import site2 from '../../img/site2.png'
import site3 from '../../img/site3.png'
import site4 from '../../img/site4.png'
import site5 from '../../img/site5.png'
import site6 from '../../img/site6.png'


const Portfolio = () => (
    <PortfolioSection id="portfolio">
        <Subtitle>Portfolio</Subtitle>
        <Description>Confira os trabalhos mais recentes</Description>
        <Grid>
            <li>
                <a target="_blank" href="https://mapasonoropvh.com.br/"><img src={site1} /></a>
                <h3>Mapa Sonoro Porto Velho</h3>
            </li>
            <li>
                <a target="_blank" href="https://cgsadv.com.br/"><img src={site2} /></a>
                <h3>CGSA Advogados</h3>
            </li>
            <li>
                <a target="_blank" href="https://agenciaatos.com/"><img src={site3} /></a>
                <h3>Agência Atos</h3>
            </li>
            <li>
                <a target="_blank" href="https://telasrondonia.com.br/"><img src={site4} /></a>
                <h3>Telas Rondônia</h3>
            </li>
            <li>
                <a target="_blank" href="https://ssintercambiobrasil.com/"><img src={site5} /></a>
                <h3>SS Intercâmbio</h3>
            </li>
            <li>
                <a target="_blank" href="https://aleffilmes.com/"><img src={site6} /></a>
                <h3>Alef Filmes</h3>
            </li>
        </Grid>
    </PortfolioSection>
)

export default Portfolio