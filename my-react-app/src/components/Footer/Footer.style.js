import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: navy;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled.p`
  color: rgb(29, 104, 255);
  text-decoration: none;
  font-weight: bold;
  margin: 10px;
  text-decoration: none;
`;

export const StyledFooterAuthor = styled.div`
  color: rgb(29, 104, 255);
  padding-bottom: 50px;
  background-color: navy;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`;

export const StyledImageLogo = styled.img`
  height: 58px;
  justify-content: center;
  padding: 6px;
  border-radius: 20px;
  &:hover {
    /* height: 74px; */
    background: rgb(29, 104, 255);
  }
`;