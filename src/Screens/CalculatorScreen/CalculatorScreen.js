import React, {Component} from 'react';
import {HeaderStyle, MainContentStyle, SubContentStyle, TextFieldContentStyle} from "./style";
import WallComponent from "./WallComponent";
import WallService from "../../Services/WallService";
import {Button} from "@material-ui/core";
import InkService from "../../Services/InkService";
import FabComponent from "../../Components/Fab/FabComponent";
import Header from "./Header";

class CalculatorScreen extends Component {
    static ROUTE = '/';

    constructor(props) {
        super(props);

        this.state = {
            wall1: null,
            ink: null,
        };

        this.wallsValues = [];
    }

    doCalc = () => {
        try {

            const sumArea = WallService.checkRules(this.wallsValues).getAreaTotal();
            const ink = InkService.start(sumArea).calcInks();

            console.log(ink);

            this.setState({
                ink,
            });

        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <>
                <Header/>
                <MainContentStyle>
                    <WallComponent title={'1 Parede'}
                                   callback={(value) => this.wallsValues.push(value)}/>
                    <FabComponent onClick={this.doCalc}/>
                </MainContentStyle>
            </>
        );
    }
}

export default CalculatorScreen;