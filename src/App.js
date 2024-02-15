import React from "react"
import GlobalStyle, { Container } from './styles'
import Hero from "./containers/Hero";
import Portfolio from "./containers/Portfolio";
import Menu from "./containers/Menu";
import Services from "./containers/Services";
import About from "./containers/About";
import Footer from "./containers/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Container>
        <Hero />
        <Services />
        <Portfolio />
        <About />
      </Container>
      <Footer />
    </>
  );
}

export default App;
