import React, {Component} from 'react';
import {HeaderStyle} from "./style";
import {Typography} from "@material-ui/core";

class Header extends Component {
    render() {
        return (
            <HeaderStyle>
                <Typography variant={'h3'}>100<sup>m2</sup></Typography>
                <Typography variant={'h5'}>Areá Total</Typography>
                <hr/>
                <Typography variant={'h6'}>Abaixo nossa recomendacao de tamanhos de latas de tintas:</Typography>
                <p>1x 3.6L</p>
                <p>2x 18L</p>
                <p>1x 3.6L</p>
            </HeaderStyle>
        );
    }
}

export default Header;