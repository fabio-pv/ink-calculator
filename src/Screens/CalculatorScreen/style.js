import styled from "styled-components";
import {Paper} from "@material-ui/core";

export const HeaderStyle = styled.div`
  width: 100%;
  height: 300px;
  background: #e78c20;
`;

export const MainContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
`;

export const SubContentStyle = styled(Paper)`
  width: 80%;
`;