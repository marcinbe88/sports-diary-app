import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UserPanelNavBar } from "../UserPanelNavBar/UserPanelNavBar";

import {
  StyledUserPanelDescription,
  StyledUserPanelSection,
  StyledHeader,
  StyledParagraph,
} from "./UserPanelSeeResult.style";
import { UserPanelSee } from "../../views/UserPanelSee";
import { UserPanelAdd } from "../../views/UserPanelAdd";
import { UserPanelSet } from "../../views/UserPanelSet";

export const UserPanelSeeResult = () => {
  return (
    <>
      <StyledUserPanelSection>
        <StyledUserPanelDescription>
          

          <BrowserRouter>
            <UserPanelNavBar />
            See Result Section
          </BrowserRouter>

        </StyledUserPanelDescription>
      </StyledUserPanelSection>
    </>
  );
};
