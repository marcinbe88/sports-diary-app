import styled from "styled-components";
import BackgroundPic from "../../assets/background3small.jpg";

export const StyledHeader = styled.h2`
  font-family: 'Play', sans-serif;
  margin: 30px;
  color: navy;
  font-size: 26px;
`;

export const StyledParagraph = styled.p`
  margin: 30px 30px 10px 30px;
  color: navy;
  font-size: 20px;
  font-weight: bold;
  width: 400px;
`;

export const StyledLoginSection = styled.div`
  background: url(${BackgroundPic});
  font-family: "Play", sans-serif;
  height: 1000px;
  width: 100%;
  overflow: hidden;
  padding: 80px 350px;
`;

export const StyledLoginDescription = styled.div`
  background-color: rgb(213, 210, 210, 0.8);
  border-radius: 30px;
  width: 400px;
  padding: 25px;
`;

export const StyledInputBox = styled.input`
  width: 300px;
  height: 30px;
  margin-left: 30px;
  border-radius: 8px;
  font-size: 16px;
  font-family: 'play';
`

export const StyledButton = styled.button`
  width: 150px;
  height: 40px;
  margin: 20px 30px;
  border-radius: 16px;
  background-color: navy;
  color: white;
  font-size: 16px;
  font-family: 'play';
  &:hover {
    color: rgb(29, 104, 255);
    cursor: pointer;
  }
`

export const StyledLink = styled.p`
  margin-left:30px;
  color: navy;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
`

export const StyledInfo = styled.p`
  margin: 14px 30px 10px 30px;
  color:rgb(205, 1, 1);
  font-size: 16px;
  font-weight: bold;
  width: 400px;
`;