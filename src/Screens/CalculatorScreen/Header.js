import React, {Component} from 'react';
import {HeaderStyle} from "./style";
import {Typography} from "@material-ui/core";
import PropTypes from 'prop-types';
import ConvertUtil from "../../Utils/ConvertUtil";

class Header extends Component {

    makeList() {

        const counts = {};
        this.props.ink.inksNeed.forEach((x) => {
            counts[x] = (counts[x] || 0) + 1;
        });

        const list = [];
        Object.keys(counts).forEach((key) => {
            list.push(
                <p>{counts[key]}x {key}L</p>
            );
        });

        return list;
    }

    render() {
        return (
            <HeaderStyle>
                {this.props.ink === null &&
                <>
                    <Typography variant={'h5'}
                                align={'center'}>Preencha as dimensões da sua parede e iremos te informa as latas de
                        tintas necessárias </Typography>
                </>
                }
                {this.props.ink !== null &&
                <>
                    <Typography variant={'h3'}>{ConvertUtil.cm2ToM2(this.props.ink.areRaw)}<sup>m2</sup></Typography>
                    <Typography variant={'h5'}>Areá Total</Typography>
                    <hr/>
                    <Typography variant={'h6'}
                                align={'center'}>Abaixo nossa recomendacao de tamanhos de latas de tintas:</Typography>
                    {this.makeList()}
                </>
                }
            </HeaderStyle>
        );
    }
}

Header.propTypes = {
    ink: PropTypes.object,
};

export default Header;