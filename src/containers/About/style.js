import styled from "styled-components";

export const AboutSection = styled.section`
  margin-top: 64px;
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

  h3 {
    font-weight: 500;
    font-size: 14px;
  }

  p {
    margin-top: 24px;
  }

  img {
    width: 100%;
    border-radius: 16px;
  }
`;
