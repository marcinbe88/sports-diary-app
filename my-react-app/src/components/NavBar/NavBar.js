import { NavLink } from "react-router-dom";
import { StyledImgLogo, StyledLink, StyledNavigation } from "./NavBar.style";
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
            <StyledLink>About us</StyledLink>
          </NavLink>
        </div>

        <div className="li">
          <NavLink to="/contact">
            <StyledLink>Contact us</StyledLink>
          </NavLink>
        </div>

        <div className="li">
          <NavLink to="/login">
            <StyledLink>Login</StyledLink>
          </NavLink>
        </div>

        <div className="li">
          <NavLink to="/userpanel-seeresult">
            <StyledLink>User panel</StyledLink>
          </NavLink>
        </div>
      </StyledNavigation>
    </>
  );
}
