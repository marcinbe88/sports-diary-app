import styled from "styled-components";
import BackgroundPic from "../../assets/background1small.jpg";

export const StyledHeader = styled.h2`
  margin: 20px 60px;
  color: red;
  font-size: 30px;
  text-decoration: underline;
`;

export const StyledParagraph = styled.p`
  margin: 20px 60px;
  color: green;
  font-size: 20px;
  width: 400px;
  font-weight: bold;
`;

export const StyledAboutSection = styled.div`
  background: url(${BackgroundPic});
  font-family: "Play", sans-serif;
  height: 800px;
  width: 100%;
  overflow: hidden;
  padding: 50px;
`;
