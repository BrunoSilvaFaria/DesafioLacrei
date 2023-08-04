import { styled } from "styled-components";
import { colors } from "../../helpers/colors";
import { conteiner } from "../styles";
export const Conteiner = styled.section`
  ${conteiner};
  .hero {
    h1 {
      margin-bottom: 48px;
    }
    p {
      border-left: 5px solid ${colors.green};
      padding-left: 15px;
    }
  }
`;
