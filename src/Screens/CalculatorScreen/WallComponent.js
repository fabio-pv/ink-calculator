import React, {Component} from 'react';
import {Grid, Slider, Typography} from "@material-ui/core";
import {SlideContentStyled, SubContentStyle, TextFieldContentStyle} from "./style";
import TextFieldDefault from "../../Components/TextFieldDefaultComponent/TextFieldDefault";
import PropTypes from 'prop-types';
import {ReactComponent as WindowIcon} from "../../Assets/window.svg";
import {ReactComponent as DoorIcon} from "../../Assets/door.svg";
import ConvertUtil from "../../Utils/ConvertUtil";
import SpacerComponent from "../../Components/SpacerComponent/SpacerComponent";

class WallComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            erros: null,
        };
    }

    componentDidMount() {
        this.props.callback(
            this.callback
        );
    }

    callback = () => {
        return this.state;
    }

    handleChange(event, name) {
        const {value} = event.target;

        this.setState({
            [name]: ConvertUtil.mToCm(value),
        });
    }

    doorHandleChange(value) {
        this.setState({
            door: value,
        });
    }

    windowHandleChange(value) {
        this.setState({
            window: value,
        });
    }

    render() {
        return (
            <Grid item={true}
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  xl={3}>
                <SubContentStyle elevation={3}>
                    <Typography variant={'h5'}
                                align={'center'}>
                        {this.props.title}
                    </Typography>
                    <SpacerComponent height={50}/>
                    <TextFieldContentStyle>
                        <div>
                            <TextFieldDefault label={'Comprimento (m2)'}
                                              type={'number'}
                                              onChange={(event) => this.handleChange(event, 'width')}>
                            </TextFieldDefault>
                            <h5>x</h5>
                            <TextFieldDefault label={'Altura (m2)'}
                                              type={'number'}
                                              onChange={(event) => this.handleChange(event, 'height')}>
                            </TextFieldDefault>
                        </div>
                    </TextFieldContentStyle>
                    <SlideContentStyled>
                        <WindowIcon/>
                        <Slider defaultValue={0}
                                valueLabelDisplay={'auto'}
                                step={1}
                                min={0}
                                max={5}
                                erros={this.state.erros}
                                onChange={(event, newValue) => this.windowHandleChange(newValue)}/>
                    </SlideContentStyled>
                    <SlideContentStyled>
                        <DoorIcon/>
                        <Slider defaultValue={0}
                                valueLabelDisplay={'auto'}
                                step={1}
                                min={0}
                                max={5}
                                erros={this.state.erros}
                                onChange={(event, newValue) => this.doorHandleChange(newValue)}/>
                    </SlideContentStyled>
                </SubContentStyle>
            </Grid>
        );
    }
}

WallComponent.propTypes = {
    title: PropTypes.string,
};

export default WallComponent;