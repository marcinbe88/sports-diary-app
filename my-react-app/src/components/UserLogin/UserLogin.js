import {
  StyledButton,
  StyledHeader,
  StyledInputBox,
  StyledLoginDescription,
  StyledLoginSection,
  StyledParagraph,
} from "./UserLogin.style";

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
            type="text"
            placeholder="Write your passport"
            maxLength="30"
          />
          <StyledButton>Login</StyledButton>
        </StyledLoginDescription>
      </StyledLoginSection>
    </>
  );
};
