import { css } from "styled-components";
import { fontHeader, fontParagraph, fontLink } from "../helpers/tipografia";

// === Default ===
export const displayFlex = css`
  display: flex;
  justify-content: space-between;
`;

// === Estados ===
export const opacity = css`
  transition: 0.2s ease 0s;
  &:hover {
    opacity: 0.7;
  }
`;

// === Nav ===
export const nav = css`
  ul {
    ${displayFlex};
    width: fit-content;
  }
  li {
    a {
      ${fontLink};
      ${opacity};
    }
  }
`;

// ==== Conteiner ===
export const conteiner = css`
  margin: 75px auto 0 auto;
  width: 90%;
  @media (min-width: 1041px) {
    & {
      ${displayFlex};
      align-items: flex-start;
    }
  }

  @media (max-width: 1040px) {
    .hero,
    .conteiner-img,
    img {
      margin: auto;
    }

    .conteiner-img{
      width: 90%;
    }
  }
  .hero {
    max-width: 540px;
    h1 {
      ${fontHeader};
    }
    p {
      ${fontParagraph};
    }
  }
  .conteiner-img {
    width: 100%;
    max-width: 540px;
    img {
      height: 421px;
      max-width: 540px;
      width: 100%;
    }
  }
`;
