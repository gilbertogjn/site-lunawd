import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  height: 80vh;

  @media only screen and (max-width: 600px) {
    height: auto;
    flex-direction: column-reverse;
    margin-bottom: 100px;
  }

  img {
    width: 80vh;

    @media only screen and (max-width: 600px) {
      width: 100%;
      display: block;
    }
  }
`;

export const Titulo = styled.h1`
  color: #fff;
  font-size: 44px;
  font-weight: lighter;

  @media only screen and (max-width: 600px) {
      width: 100%;
      display: block;
    }
`;
