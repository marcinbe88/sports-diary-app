import {
  StyledLink,
  StyledFooter,
  StyledFooterAuthor,
  StyledImageLogo,
  StyledNameLink,
} from "./Footer.style";
import GitHubLogo from "../../assets/GitHubLogo.png";
import FaceBookLogo from "../../assets/FaceBookLogo.jpeg";
import InstagramLogo from "../../assets/InstagramLogo.png";

export function Footer() {
  return (
    <>
      <StyledFooter>
        <div className="li">
          <StyledLink>
            <a href="https://github.com/marcinbe88">
              <StyledImageLogo src={GitHubLogo} />
            </a>
          </StyledLink>
        </div>

        <div className="li">
          <StyledLink>
            <a href="https://facebook.com">
              <StyledImageLogo src={FaceBookLogo} />
            </a>
          </StyledLink>
        </div>

        <div className="li">
          <StyledLink>
            <a href="https://instagram.com">
              <StyledImageLogo src={InstagramLogo} />
            </a>
          </StyledLink>
        </div>
      </StyledFooter>

      <StyledFooterAuthor>
        Copyright © 2023
        <a href="https://www.linkedin.com/in/marcin-bejger/">
          <StyledNameLink>Marcin Bejger</StyledNameLink>
        </a>
        . All rights reserved.
      </StyledFooterAuthor>
    </>
  );
}
