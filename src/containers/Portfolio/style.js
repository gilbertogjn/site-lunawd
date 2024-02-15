import styled from "styled-components";

export const PortfolioSection = styled.section`
  margin: 120px 0;
`

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 32px;

  @media only screen and (max-width: 600px) {
    display: block;
  }

  li {
    list-style: none;
    width: 100%;
    margin-bottom: 18px;

    @media only screen and (max-width: 600px) {
        margin-bottom: 54px;
  }

    img {
      width: 100%;
      border-radius: 16px;
      margin-bottom: 8px;
    }

    h3 {
      text-align: center;
    }
  }
`
