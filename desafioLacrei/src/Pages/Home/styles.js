import { styled } from "styled-components";
import {
  ButtonUsuario,
  ButtonProfissional,
} from "../../components/Button/styles";
import { conteiner, displayFlex } from "../../components/styles";
export const Conteiner = styled.section`
  ${conteiner}
  .hero {
    h1 {
      margin: 0;
    }
    p {
      margin: 35px 0 55px 0;
    }
    @media (max-width: 450px) {
      p {
        margin: 30px 0 40px 0;
      }
    }

    .links {
      max-width: 450px;
      ${displayFlex};
      @media (min-width: 451px) and (max-width: 1140px) {
        & {
          margin-bottom: 50px;
        }
      }
      @media (max-width: 450px) {
        & {
          flex-direction: column;
        }
        .btn-user,
        .btn-profissional {
          margin: auto;
        }
        .btn-user {
          margin-bottom: 25px;
        }
        .btn-profissional {
          margin-bottom: 60px;
        }
      }

      .btn-user {
        ${ButtonUsuario}
      }
      .btn-profissional {
        ${ButtonProfissional}
      }
    }
  }
`;
