import styled from "styled-components";
import {Grid, Paper} from "@material-ui/core";

export const HeaderStyle = styled.div`
  width: 100%;
  height: 500px;
  background: #e78c20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;

  h3 {
    font-weight: bold;

    sup {
      font-size: 25px;
    }
  }

  h6 {
    font-weight: normal;
    margin-bottom: 20px;
  }

  hr {
    width: 95%;
  }

  p {
    font-size: 22px;
    font-weight: bold;
    margin: 0 0 5px 0;
  }
`;

export const MainContentStyle = styled.div`
  padding: 20px;
  margin-top: -80px;
`;

export const SubContentStyle = styled(Paper)`
  padding: 20px;
  border-radius: 20px;
  background: ${props => props.hasError ? '#ffbab5' : '#fff'};
`;

export const TextFieldContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;

  svg {
    width: 100px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    height: 70px;
  }

  h5 {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const SlideContentStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 40px;
    height: 40px;
    margin-right: 30px;
  }
`;