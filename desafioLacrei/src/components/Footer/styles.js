import { styled } from "styled-components";
import { colors } from "../../helpers/colors";
export const Conteiner = styled.footer`
  .footer-conteiner {
    width: 90%;
    margin: auto;
    border-top: 1px solid ${colors.greenLight};
    .footer{
        margin: 35px 0 30px 0;
    }
    p {
      color: ${colors.grey};
      font-size: 12px;
      margin-top: 35px;
    }
  }
`;
