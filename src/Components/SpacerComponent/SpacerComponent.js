import React, {Component} from 'react';
import {SpacerStyled} from "./styled";
import PropTypes from 'prop-types';

class SpacerComponent extends Component {
    render() {
        return (
            <SpacerStyled width={this.props.width}
                          height={this.props.height}/>
        );
    }
}

SpacerComponent.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
};

export default SpacerComponent;