import { styled } from "styled-components";
import { displayFlex, opacity } from "../styles";
import { colors } from "../../helpers/colors";
export const Conteiner = styled.header`
  height: 60px;
  background-color: ${colors.greyLight};
  @media (max-width: 520px) {
    height: 90px;
  }
  div {
    ${displayFlex};
    @media (max-width: 520px) {
      flex-direction: column;
      justify-content: center;
      .logo{
        margin-bottom: 10px;
      }
    }
    align-items: center;
    margin: auto;
    height: inherit;
    width: 90%;
    .logo {
      font-size: 32px;
      font-weight: 700;
      color: ${colors.green};
      ${opacity}
    }
  }
`;
