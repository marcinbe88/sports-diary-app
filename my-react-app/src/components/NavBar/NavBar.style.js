import styled from "styled-components";

export const StyledNavigation = styled.nav`
  background-color: navy;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledLink = styled.a`
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 20px;
  text-transform: uppercase;
  &:hover {
    color: rgb(29, 104, 255);
  }
`;

export const StyledImgLogo = styled.img`
  align-items: left;
  width: 220x;
  height: 50px;
  justify-content: center;
  margin: 30px;
`;

export const StyledButton = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 20px;
  background-color: orange;
  font-family: "play";
  &:hover {
    cursor: pointer;
  }
`;

export const StyledLinkLogin = styled.a`
  color: black;
  font-weight: bold;
  font-size: 20px;
  &:hover {
    color: white;
  }
`;
