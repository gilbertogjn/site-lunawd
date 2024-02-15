import styled from "styled-components";

export const ServicesSection = styled.section`
  margin-bottom: 64px;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    gap: 32px;
    margin-top: 34px;

    @media only screen and (max-width: 600px) {
      display: block;
    }

    li {
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      padding: 36px;

      @media only screen and (max-width: 600px) {
        margin-bottom: 22px;
      }
    }

    h3 {
      margin-bottom: 8px;
    }

    img {
      width: 100px;
      max-height: 100px;
      margin-bottom: 16px;
    }
  }
`;
