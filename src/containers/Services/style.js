import styled from "styled-components";

export const ServicesSection = styled.section`
  height: 500px;

  ul {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    margin-top: 34px;

    li {
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      padding: 36px;
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
