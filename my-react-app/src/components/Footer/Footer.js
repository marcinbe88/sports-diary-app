import {
  StyledLink,
  StyledFooter,
  StyledFooterAuthor,
  StyledImageLogo,
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
        Copyright © 2023 Marcin Bejger. All rights reserved.
      </StyledFooterAuthor>
    </>
  );
}
