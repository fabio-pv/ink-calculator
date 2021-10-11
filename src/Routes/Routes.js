import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CalculatorScreen from "../Screens/CalculatorScreen/CalculatorScreen";

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact={true}
                           path={CalculatorScreen.ROUTE}
                           component={CalculatorScreen}/>
                </Switch>
            </Router>
        );
    }
}

export default Routes;