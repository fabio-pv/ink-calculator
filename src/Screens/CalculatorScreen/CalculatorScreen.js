import React, {Component} from 'react';
import {HeaderStyle, MainContentStyle, SubContentStyle, TextFieldContentStyle} from "./style";
import WallComponent from "./WallComponent";
import WallService from "../../Services/WallService";
import {Button, Grid} from "@material-ui/core";
import InkService from "../../Services/InkService";
import FabComponent from "../../Components/Fab/FabComponent";
import Header from "./Header";
import {SuperContext} from "../../Contexts/SuperContext";

class CalculatorScreen extends Component {
    static ROUTE = '/';
    static contextType = SuperContext;

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

            window.scrollTo(0, 0);

            this.setState({
                ink,
            });

        } catch (e) {
            this.context.showDialog({
                open: true,
                title: `Sua parede ${e.index + 1} possui o seguinte problema:`,
                bodyText: e.error,
            });
        }
    }

    render() {
        return (
            <>
                <Header ink={this.state.ink}/>
                <MainContentStyle>
                    <Grid container={true}
                          spacing={3}>
                        <WallComponent title={'1 Parede'}
                                       callback={(value) => this.wallsValues.push(value)}/>
                        <WallComponent title={'2 Parede'}
                                       callback={(value) => this.wallsValues.push(value)}/>
                        <WallComponent title={'3 Parede'}
                                       callback={(value) => this.wallsValues.push(value)}/>
                        <WallComponent title={'4 Parede'}
                                       callback={(value) => this.wallsValues.push(value)}/>
                    </Grid>
                </MainContentStyle>
                <FabComponent onClick={this.doCalc}/>
            </>
        );
    }
}

export default CalculatorScreen;