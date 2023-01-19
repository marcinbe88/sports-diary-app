import {
  StyledButton,
  StyledHeader,
  StyledInputBox,
  StyledLink,
  StyledLoginDescription,
  StyledLoginSection,
  StyledParagraph,
} from "./RegisterAccount.style";
import { NavLink } from "react-router-dom";

export const RegisterAccount = () => {
  return (
    <>
      <StyledLoginSection>
        <StyledLoginDescription>
          <StyledHeader>Register</StyledHeader>
          <StyledParagraph>Name:</StyledParagraph>
          <StyledInputBox
            name="name"
            type="text"
            placeholder="Write your name"
            maxLength="30"
          />
           <StyledParagraph>Surname:</StyledParagraph>
          <StyledInputBox
            name="surname"
            type="text"
            placeholder="Write your surname"
            maxLength="30"
          />
           <StyledParagraph>Email:</StyledParagraph>
          <StyledInputBox
            name="email"
            type="text"
            placeholder="Write your email"
            maxLength="30"
          />
          <StyledParagraph>Password:</StyledParagraph>
          <StyledInputBox
            name="email"
            type="password"
            placeholder="Write your passport"
            maxLength="30"
          />
          <StyledButton>Create account</StyledButton>
        </StyledLoginDescription>
      </StyledLoginSection>
    </>
  );
};
