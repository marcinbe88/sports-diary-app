import { UserPanelNavBar } from "../UserPanelNavBar/UserPanelNavBar";
import { RunList } from "../RunList/RunList";

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
          {/* <RunList /> */}
          <StyledParagraph>See Result Section</StyledParagraph>
          <StyledParagraph>
            <li>All result in one table</li>
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
