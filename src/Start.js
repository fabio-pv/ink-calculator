import React, {Component} from 'react';
import ThemaCustomized from "./Customized/ThemaCustomized";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import {CssBaseline} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles";
import {SuperContext} from "./Contexts/SuperContext";
import Routes from "./Routes/Routes";


class Start extends Component {

    render() {
        return (
            <SuperContext.Provider value={{}}>
                <ThemeProvider theme={ThemaCustomized.system()}>
                    <MuiPickersUtilsProvider utils={MomentUtils}
                                             locale={'pt-BR'}>
                        <CssBaseline/>
                        <Routes/>
                    </MuiPickersUtilsProvider>
                </ThemeProvider>
            </SuperContext.Provider>
        );
    }
}

export default Start;