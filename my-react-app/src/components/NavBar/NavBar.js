import { NavLink } from "react-router-dom";
import {
  StyledButton,
  StyledImgLogo,
  StyledLink,
  StyledLinkLogin,
  StyledNavigation,
} from "./NavBar.style";
import diary from "../../assets/diary.png";

export function NavBar() {
  return (
    <>
      <StyledNavigation>
        <NavLink to="/">
          <StyledImgLogo src={diary} />
        </NavLink>

        <div className="li">
          <NavLink to="/about">
            <StyledLink>About</StyledLink>
          </NavLink>
        </div>

        <div className="li">
          <NavLink to="/contact">
            <StyledLink>Contact</StyledLink>
          </NavLink>
        </div>

        <div className="li">
          <NavLink to="/userpanel-seeresult">
            <StyledLink>User panel</StyledLink>
          </NavLink>
        </div>

        <div className="li">
          <NavLink to="/login">
            <StyledButton>
              <StyledLinkLogin>Login</StyledLinkLogin>
            </StyledButton>
          </NavLink>
        </div>
      </StyledNavigation>
    </>
  );
}
