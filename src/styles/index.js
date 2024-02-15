import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        list-style: none;
        color: #fff;

        body {
            background: rgb(4,0,69);
            background: linear-gradient(141deg, rgba(4,0,69,1) 0%, rgba(9,45,121,1) 35%, rgba(49,220,255,1) 100%); 
        }

        a {
            text-decoration: none;
        }
    }
`

export const Container = styled.div`
    width: 1024px;
    margin: 0 auto;
    padding: 16px;
`

export const Subtitle = styled.h2`
    color: #fff;
`

export const Description = styled.p`
    color: #fff;
`

export default GlobalStyle