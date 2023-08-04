import { styled } from "styled-components";
import { nav } from "../../styles";
import { colors } from "../../../helpers/colors";

export const Conteiner = styled.nav`
  ${nav};
  @media (max-width: 400px) {
    .menu a,
    .footer a {
      font-size: 14px;
    }
  }
  .menu {
    gap: 30px;
    .active {
      color: ${colors.green};
    }
  }
  .footer {
    @media (max-width: 400px) {
      flex-direction: column;
      gap: 20px;
    }
    gap: 35px;
    a {
      font-weight: 400;
    }
    .active {
      font-weight: 700;
    }
  }
`;
