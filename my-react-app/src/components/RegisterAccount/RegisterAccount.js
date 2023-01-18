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
          <NavLink to="/about">
            <StyledLink>Register</StyledLink>
          </NavLink>
          <NavLink to="/about">
            <StyledLink>Forgot your password?</StyledLink>
          </NavLink>
          <StyledButton>Login</StyledButton>
        </StyledLoginDescription>
      </StyledLoginSection>
    </>
  );
};
