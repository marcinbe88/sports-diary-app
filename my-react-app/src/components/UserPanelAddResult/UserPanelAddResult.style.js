import styled from "styled-components";
import BackgroundPic from "../../assets/background3small.jpg";

export const StyledHeader = styled.h2`
  margin: 30px;
  color: navy;
  font-size: 30px;
  text-decoration: underline;
`;

export const StyledParagraph = styled.p`
  margin: 10px auto;
  color: navy;
  font-size: 20px;
  width: 400px;
  font-weight: bold;
`;

export const StyledUserPanelSection = styled.div`
  background: url(${BackgroundPic});
  font-family: "Play", sans-serif;
  height: 1000px;
  width: 100%;
  overflow: hidden;
  padding: 80px;
`;

export const StyledUserPanelDescription = styled.div`
  background-color: rgb(213, 210, 210, 0.9);
  border-radius: 30px;
  width: 1150px;
  height: 850px;
  padding: 25px;
  margin: 0 auto;
  `;

export const StyledButton = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 20px;
  margin: 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: orange;
  font-family: "play";
  &:hover {
    cursor: pointer;
  }
`;