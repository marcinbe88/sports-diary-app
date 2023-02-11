import {
  StyledContactDescription,
  StyledContactSection,
  StyledHeader,
  StyledParagraph,
} from "./ContactUs.style";

export const ContactUs = () => {
  return (
    <>
      <StyledContactSection>
        <StyledContactDescription>
          <StyledHeader>Contact us</StyledHeader>
          <StyledParagraph>Marcin Bejger - founder</StyledParagraph>
          <StyledParagraph>marcin.bejger@gmail.com</StyledParagraph>
          <StyledParagraph>555-444-333</StyledParagraph>
        </StyledContactDescription>
      </StyledContactSection>
    </>
  );
};
