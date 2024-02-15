import styled from "styled-components";

export const MenuTop = styled.nav`
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 8px 0;
  z-index: 100;
`;

export const ContainerTop = styled.div`
  height: 50px;
  width: 1024px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    @media only screen and (max-width: 600px) {
      display: none;
    }

    display: flex;
    gap: 16px;

    a {
      color: #fff;
    }
  }
`;

export const Logo = styled.img`
  width: 100px;
`;
