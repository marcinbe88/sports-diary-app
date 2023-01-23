import { UserPanelNavBar } from "../UserPanelNavBar/UserPanelNavBar";

import {
  StyledParagraph,
  StyledUserPanelDescription,
  StyledUserPanelSection,
} from "./UserPanelSeeResult.style";

export const UserPanelSeeResult = () => {
  return (
    <>
      <StyledUserPanelSection>
        <StyledUserPanelDescription>
          <UserPanelNavBar />
          <StyledParagraph>See Result Section</StyledParagraph>
        </StyledUserPanelDescription>
      </StyledUserPanelSection>
    </>
  );
};
