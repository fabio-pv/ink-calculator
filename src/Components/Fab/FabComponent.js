import React, {Component} from 'react';
import {Fab} from "@material-ui/core";
import {FormatPaint} from "@material-ui/icons";
import {ContentFabStyled} from "./styled";
import PropTypes from 'prop-types';

class FabComponent extends Component {
    render() {
        return (
            <ContentFabStyled>
                <Fab color={'secondary'}
                     size={'large'}
                     onClick={this.props.onClick}>
                    <FormatPaint/>
                </Fab>
            </ContentFabStyled>
        );
    }
}

FabComponent.propTypes = {
    onClick: PropTypes.func,
};

export default FabComponent;