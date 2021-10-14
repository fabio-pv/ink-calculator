import React, {Component} from 'react';
import {HeaderStyle, MainContentStyle, SubContentStyle, TextFieldContentStyle} from "./style";
import WallComponent from "./WallComponent";

class CalculatorScreen extends Component {
    static ROUTE = '/';

    constructor(props) {
        super(props);

        this.state = {
            wall1: null,
        };

        this.wallsValues = [];
    }

    doCalc = () => {



    }

    render() {
        console.log(this.wallsValues);
        return (
            <>
                <HeaderStyle/>
                <MainContentStyle>
                    <WallComponent title={'1 Parede'}
                                   callback={(value) => this.wallsValues.push(value)}/>
                    <WallComponent title={'2 Parede'}
                                   callback={(value) => this.wallsValues.push(value)}/>
                </MainContentStyle>
            </>
        );
    }
}

export default CalculatorScreen;