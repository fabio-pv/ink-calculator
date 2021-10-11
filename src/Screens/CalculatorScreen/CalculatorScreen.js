import React, {Component} from 'react';
import {HeaderStyle, MainContentStyle, SubContentStyle, TextFieldContentStyle} from "./style";
import WallComponent from "./WallComponent";

class CalculatorScreen extends Component {
    static ROUTE = '/';

    render() {
        return (
            <>
                <HeaderStyle/>
                <MainContentStyle>
                    <WallComponent title={'1 Parede'}/>
                    <WallComponent title={'1 Parede'}/>
                    <WallComponent title={'1 Parede'}/>
                    <WallComponent title={'1 Parede'}/>
                </MainContentStyle>
            </>
        );
    }
}

export default CalculatorScreen;