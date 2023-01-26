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
          <StyledParagraph>
            <li>input fields for each information</li>
            <li>type of sport</li>
            <li>name of the race</li>
            <li>date of the race</li>
            <li>distance</li>
            <li>time</li>
          </StyledParagraph>
        </StyledUserPanelDescription>
      </StyledUserPanelSection>
    </>
  );
};
