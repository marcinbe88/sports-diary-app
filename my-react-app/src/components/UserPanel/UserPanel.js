import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About } from "../../views/About";
import { Contact } from "../../views/Contact";
import { Home } from "../../views/Home";
import { Login } from "../../views/Login";
import { UserPage } from "../../views/UserPanel";
import { UserPanelNavBar } from "../UserPanelNavBar/UserPanelNavBar";
import {
  StyledUserPanelDescription,
  StyledUserPanelSection,
  StyledHeader,
  StyledParagraph,
} from "./UserPanel.style";

export const UserPanel = () => {
  return (
    <>
      <StyledUserPanelSection>
        <StyledUserPanelDescription>
          

          {/* <BrowserRouter> */}
            <UserPanelNavBar />
            <StyledHeader>User Panel</StyledHeader>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/userpanel" element={<UserPage />} />
            </Routes>
          {/* </BrowserRouter> */}

        </StyledUserPanelDescription>
      </StyledUserPanelSection>
    </>
  );
};
