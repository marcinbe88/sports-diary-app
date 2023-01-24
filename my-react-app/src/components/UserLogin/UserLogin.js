import {
  StyledButton,
  StyledHeader,
  StyledInputBox,
  StyledLink,
  StyledLoginDescription,
  StyledLoginSection,
  StyledParagraph,
} from "./UserLogin.style";
import { NavLink } from "react-router-dom";

export const UserLogin = () => {
  return (
    <>
      <StyledLoginSection>
        <StyledLoginDescription>
          <StyledHeader>Login</StyledHeader>
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
          <NavLink to="/register">
            <StyledLink>Register</StyledLink>
          </NavLink>
          <NavLink to="/forgotpassword">
            <StyledLink>Forgot your password?</StyledLink>
          </NavLink>
          <StyledButton>Login</StyledButton>
        </StyledLoginDescription>
      </StyledLoginSection>
    </>
  );
};
