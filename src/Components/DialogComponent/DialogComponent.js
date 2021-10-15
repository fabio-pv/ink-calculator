import React, {Component} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@material-ui/core";
import {SuperContext} from "../../Contexts/SuperContext";

class DialogComponent extends Component {
    static contextType = SuperContext;

    render() {
        return (
            <Dialog open={this.props.open}>
                <DialogTitle>
                    {this.props.title}
                </DialogTitle>
                <DialogContent>
                    <Typography variant={'body2'}
                                color={'error'}>
                        * {this.props.bodyText}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.context.showDialog({open: false,})}>ok</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default DialogComponent;