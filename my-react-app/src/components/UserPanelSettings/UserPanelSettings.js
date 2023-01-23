import { UserPanelNavBar } from "../UserPanelNavBar/UserPanelNavBar";

import {
  StyledParagraph,
  StyledUserPanelDescription,
  StyledUserPanelSection,
} from "./UserPanelSettings.style";

export const UserPanelSettings = () => {
  return (
    <>
      <StyledUserPanelSection>
        <StyledUserPanelDescription>
          <UserPanelNavBar />
          <StyledParagraph>Settings Section</StyledParagraph>
        </StyledUserPanelDescription>
      </StyledUserPanelSection>
    </>
  );
};
