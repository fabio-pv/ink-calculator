import styled from "styled-components";
import {TextField} from "@material-ui/core";


export const TextFieldDefaultStyled = styled(TextField)`
  border: none;
  margin: 0;
  border-radius: 5px;
  width: ${props => props.width ? props.width + 'px' : 'auto'};
`;