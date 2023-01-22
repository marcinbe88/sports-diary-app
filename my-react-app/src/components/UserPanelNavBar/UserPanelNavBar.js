import { NavLink } from "react-router-dom";
import { StyledImgLogo, StyledLink, StyledNavigation } from "./UserPanelNavBar.style";

export function UserPanelNavBar() {
  return (
    <>
      <StyledNavigation>
      
        <div className="li">
          <NavLink to="/about">
            <StyledLink>Add new result</StyledLink>
          </NavLink>
        </div>

        <div className="li">
          <NavLink to="/contact">
            <StyledLink>See your results</StyledLink>
          </NavLink>
        </div>

        <div className="li">
          <NavLink to="/login">
            <StyledLink>Settings</StyledLink>
          </NavLink>
        </div>

      </StyledNavigation>
    </>
  );
}
