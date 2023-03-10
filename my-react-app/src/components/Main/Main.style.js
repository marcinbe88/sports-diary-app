import styled from "styled-components";
import BackgroundPic from "../../assets/background3small.jpg";

export const StyledHeader = styled.h1`
  margin: 30px;
  color: navy;
  font-size: 30px;
  text-decoration: underline;
`;

export const StyledParagraph = styled.p`
  margin: 18px 30px;
  color: navy;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  width: 400px;
`;

export const StyledMainSection = styled.div`
  background: url(${BackgroundPic});
  font-family: "Play", sans-serif;
  height: 1000px;
  width: 100%;
  overflow: hidden;
  padding: 80px;
`;

export const StyledMainDescription = styled.div`
  background-color: rgb(213, 210, 210, 0.8);
  border-radius: 30px;
  width: 500px;
  padding: 25px;
`;

export const StyledButton = styled.button`
  width: 150px;
  height: 40px;
  margin: 20px 30px;
  border-radius: 16px;
  background-color: navy;
  color: white;
  font-size: 16px;
  font-weight: bold;
  font-family: 'play';
  &:hover {
    color: rgb(29, 104, 255);
    cursor: pointer;
  }
`