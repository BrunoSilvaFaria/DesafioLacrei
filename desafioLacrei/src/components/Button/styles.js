import { css } from "styled-components";
import { opacity } from "../styles";
import { fontButton } from "../../helpers/tipografia";
import { colors } from "../../helpers/colors";
export const Button = css`
  ${opacity};
  ${fontButton};
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  width: fit-content;
`;

export const ButtonUsuario = css`
  ${Button};
  background-color: ${colors.green};
  color: ${colors.white};
  padding: 0.75rem 2rem;
`;

export const ButtonProfissional = css`
  ${Button};
  background-color: ${colors.white};
  border: 2px solid ${colors.green};
  color: ${colors.green};
  padding: 0.625rem 2.75rem;
`;
