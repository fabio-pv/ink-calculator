import React, {Component} from 'react';
import TextFieldDefault from "../../Components/TextFieldDefaultComponent/TextFieldDefault";
import {HeaderStyle, MainContentStyle, SubContentStyle} from "./style";

class CalculatorScreen extends Component {
    static ROUTE = '/';

    render() {
        return (
            <>
                <HeaderStyle/>
                <MainContentStyle>
                    <SubContentStyle elevation={3}>
                        <h5>2</h5>
                        <h5>2</h5>
                        <h5>2</h5>
                        <h5>2</h5>
                        <h5>2</h5>
                        <h5>2</h5>
                        <h5>2</h5>
                        <h5>2</h5>
                        <h5>2</h5>
                    </SubContentStyle>
                </MainContentStyle>
            </>
        );
    }
}

export default CalculatorScreen;