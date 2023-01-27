import styled from "styled-components";

export const StyledNavigation = styled.nav`
  background-color: orange;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
`;

export const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-weight: bold;
  /* text-transform: uppercase; */
  font-size: 18px;
  &:hover {
    color: rgb(29, 104, 255);
  }
`;
