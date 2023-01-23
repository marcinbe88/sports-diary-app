import { UserPanelNavBar } from "../UserPanelNavBar/UserPanelNavBar";

import {
  StyledUserPanelDescription,
  StyledUserPanelSection,
  StyledParagraph,
} from "./UserPanelAddResult.style";

export const UserPanelAddResult = () => {
  return (
    <>
      <StyledUserPanelSection>
        <StyledUserPanelDescription>
          <UserPanelNavBar />
          <StyledParagraph>Add Result Section</StyledParagraph>
        </StyledUserPanelDescription>
      </StyledUserPanelSection>
    </>
  );
};
