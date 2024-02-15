import React from "react"
import { HeroSection, Titulo } from "./style"
import heroImg from '../../img/developer.png'

const Hero = () => (
    <HeroSection id="hero">
        <Titulo>Websites únicos que geram resultados</Titulo>
        <img src={heroImg} />
    </HeroSection>
)

export default Hero