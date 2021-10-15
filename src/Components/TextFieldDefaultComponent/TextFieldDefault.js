import React, {Component} from 'react';
import {TextFieldDefaultStyled} from "./styled";


class TextFieldDefault extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
        };
    }

    render() {
        return (
            <TextFieldDefaultStyled label={this.props.label}
                                    variant={'outlined'}
                                    onChange={this.props.onChange}
                                    type={this.props.type}>
                {this.props.children}
            </TextFieldDefaultStyled>
        );
    }
}

export default TextFieldDefault;