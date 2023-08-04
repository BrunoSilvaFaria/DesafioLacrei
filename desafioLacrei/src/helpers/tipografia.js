import { css } from "styled-components";

const fontHeader = css`
  font-weight: 700;
  font-size: 3em;
  @media (max-width: 1040px) {
    font-size: 2em;
  }
`;

const fontParagraph = css`
  font-size: 1.5em;
  line-height: 32px;
  @media (max-width: 1040px) {
    font-size: 1em;
    line-height: 25px;
  }
`;

const fontLink = css`
  font-size: 1.125em;
  font-weight: 700;
`;

const fontButton = css`
  font-size: 1.125em;
  font-weight: 700;
`;

export {
  fontButton,
  fontHeader,
  fontParagraph,
  fontLink,
};
