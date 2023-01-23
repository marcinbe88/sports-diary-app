import { NavLink } from "react-router-dom";
import { StyledLink, StyledNavigation } from "./UserPanelNavBar.style";

export function UserPanelNavBar() {
  return (
    <>
      <StyledNavigation>
        <div className="li">
          <NavLink to="/userpanel-seeresult">
            <StyledLink>See your results</StyledLink>
          </NavLink>
        </div>

        <div className="li">
          <NavLink to="/userpanel-addresult">
            <StyledLink>Add new result</StyledLink>
          </NavLink>
        </div>

        <div className="li">
          <NavLink to="/userpanel-settings">
            <StyledLink>Settings</StyledLink>
          </NavLink>
        </div>
      </StyledNavigation>
    </>
  );
}
