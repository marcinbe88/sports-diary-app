import { StyledHeader, StyledParagraph, StyledAboutSection } from "./AboutUs.style";

export const AboutUs = () => {
  return (
    <>
      <StyledAboutSection>
        <StyledHeader>Information about us...</StyledHeader>
        <StyledParagraph>
          I am a passionate amateur athlete who wants to create a website with
          useful features for all the athletes in the world. As I also often
          take part in competitions, I can see and predict what kind of
          applications can be useful and helpful...
        </StyledParagraph>
      </StyledAboutSection>
    </>
  );
};
