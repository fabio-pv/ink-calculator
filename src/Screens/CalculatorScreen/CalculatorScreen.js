import React, {Component} from 'react';
import {HeaderStyle, MainContentStyle, SubContentStyle, TextFieldContentStyle} from "./style";
import WallComponent from "./WallComponent";
import WallService from "../../Services/WallService";
import {Button} from "@material-ui/core";

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

        WallService.checkRules(this.wallsValues);

    }

    render() {
        return (
            <>
                <HeaderStyle/>
                <MainContentStyle>
                    <WallComponent title={'1 Parede'}
                                   callback={(value) => this.wallsValues.push(value)}/>
                    <WallComponent title={'2 Parede'}
                                   callback={(value) => this.wallsValues.push(value)}/>
                    <Button onClick={this.doCalc}>calcular</Button>
                </MainContentStyle>
            </>
        );
    }
}

export default CalculatorScreen;