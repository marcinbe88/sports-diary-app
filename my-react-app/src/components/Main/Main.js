import { StyledHeader, StyledMainSection, StyledParagraph } from "./Main.style";

export const Main = () => {
  return (
    <StyledMainSection>
      <StyledHeader>Sports Diary App</StyledHeader>
      <StyledParagraph>
        Do you take part in sports competition and races? Is it difficult for
        you to remember all your results? Do you want to compare your times for
        the same distances such as 10k, half marathon, marathon?
      </StyledParagraph>
      <StyledParagraph>
        This app will keep track of all your result filtered by the sports type
        (running, swimming, cycling, triathlon) and most popular distances (e.g.
        10k run, 21k run, 42k run, 1k swim, 2k swim, 1/4 Ironman, 1/2 Ironman,
        etc.)
      </StyledParagraph>
    </StyledMainSection>
  );
};
