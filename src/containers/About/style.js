import styled from "styled-components";

export const AboutSection = styled.section`
  margin: 64px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 46px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 100px;
  }

  h3 {
    font-weight: 500;
    font-size: 14px;
  }

  img {
    width: 100%;
    border-radius: 16px;
  }

  span {
    display: block;
    margin-top: 8px;
  }
`;

export const AboutDescription = styled.p`
  margin: 24px 0;
`