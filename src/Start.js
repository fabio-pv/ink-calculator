import React, {Component} from 'react';
import ThemaCustomized from "./Customized/ThemaCustomized";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import {CssBaseline} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles";
import {SuperContext} from "./Contexts/SuperContext";
import Routes from "./Routes/Routes";
import DialogComponent from "./Components/DialogComponent/DialogComponent";


class Start extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDialog: false,
            title: '',
            bodyText: '',
        };
    }

    showDialog = ({
                      open,
                      title = '',
                      bodyText = '',
                  }) => {
        this.setState({
            showDialog: open,
            title,
            bodyText,
        });
    }

    render() {
        return (
            <SuperContext.Provider value={{
                showDialog: this.showDialog,
            }}>
                <ThemeProvider theme={ThemaCustomized.system()}>
                    <MuiPickersUtilsProvider utils={MomentUtils}
                                             locale={'pt-BR'}>
                        <CssBaseline/>
                        <DialogComponent open={this.state.showDialog}
                                         title={this.state.title}
                                         bodyText={this.state.bodyText}/>
                        <Routes/>
                    </MuiPickersUtilsProvider>
                </ThemeProvider>
            </SuperContext.Provider>
        );
    }
}

export default Start;