import {
  StyledButton,
  StyledHeader,
  StyledInputBox,
  StyledForgotPasswordDescription,
  StyledForgotPasswordSection,
  StyledParagraph,
} from "./ForgotPassword.style";

export const ForgotPassword = () => {
  return (
    <>
      <StyledForgotPasswordSection>
        <StyledForgotPasswordDescription>
          <StyledHeader>Change your password</StyledHeader>
          <StyledParagraph>Your email:</StyledParagraph>
          <StyledInputBox
            name="email"
            type="text"
            placeholder="Write your email"
            maxLength="30"
          />
          <StyledButton>Change password</StyledButton>
        </StyledForgotPasswordDescription>
      </StyledForgotPasswordSection>
    </>
  );
};
