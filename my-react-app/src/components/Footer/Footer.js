import { NavLink } from "react-router-dom";
import { StyledLink, StyledFooter, StyledFooterAuthor } from "./Footer.style";

export function Footer() {
  return (
    <>
      <StyledFooter>
        <NavLink to="www.github.com/marcinbe88">
          <StyledLink>GitHub</StyledLink>
        </NavLink>

        <div className="li">
          <NavLink to="https://facebook.pl">
            <StyledLink>FB</StyledLink>
          </NavLink>
        </div>

        <div className="li">
          <NavLink to="https://instagram.com">
            <StyledLink>IG</StyledLink>
          </NavLink>
        </div>
      </StyledFooter>
      <StyledFooterAuthor>
        Copyright © 2022 Marcin Bejger. All rights reserved
      </StyledFooterAuthor>
    </>
  );
}
