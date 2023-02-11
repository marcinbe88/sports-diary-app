import { NavLink } from "react-router-dom";
import {
  StyledHeader,
  StyledParagraph,
  StyledAboutSection,
  StyledAboutDescription,
  StyledLink,
} from "./AboutUs.style";

export const AboutUs = () => {
  return (
    <>
      <StyledAboutSection>
        <StyledAboutDescription>
          <StyledHeader>Information about me</StyledHeader>
          <StyledParagraph>
            I am a passionate amateur athlete who wants to create a website with
            useful features for all the sportsmen in the world. As I also often
            take part in competitions, I can see and predict what kind of
            applications can be useful and helpful. Of course I am still open
            for suggestions so in case you have any please
            <NavLink to="/contact">
              <StyledLink> contact me!</StyledLink>
            </NavLink>
          </StyledParagraph>
        </StyledAboutDescription>
      </StyledAboutSection>
    </>
  );
};
