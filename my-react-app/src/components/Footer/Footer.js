import { NavLink, Link } from "react-router-dom";
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
        <NavLink to="www.github.com/marcinbe88">
          <StyledLink>
            <StyledImageLogo src={GitHubLogo} />
          </StyledLink>
        </NavLink>

        <div className="li">
          <NavLink to="https://facebook.pl">
            <StyledLink>
              <StyledImageLogo src={FaceBookLogo} />
            </StyledLink>
          </NavLink>
        </div>

        <div className="li">
          <NavLink to="https://instagram.com">
            <StyledLink>
              <StyledImageLogo src={InstagramLogo} />
            </StyledLink>
          </NavLink>
        </div>
      </StyledFooter>
      <StyledFooterAuthor>
        Copyright © 2023 Marcin Bejger. All rights reserved.
      </StyledFooterAuthor>
    </>
  );
}
