import React, {Component} from 'react';
import {Slider, Typography} from "@material-ui/core";
import {SlideContentStyled, SubContentStyle, TextFieldContentStyle} from "./style";
import TextFieldDefault from "../../Components/TextFieldDefaultComponent/TextFieldDefault";
import PropTypes from 'prop-types';
import {ReactComponent as WallIcon} from "../../Assets/wall.svg";
import {ReactComponent as WindowIcon} from "../../Assets/window.svg";
import {ReactComponent as DoorIcon} from "../../Assets/door.svg";

class WallComponent extends Component {
    render() {
        return (
            <SubContentStyle elevation={3}>
                <Typography variant={'h5'}>
                    {this.props.title}
                </Typography>
                <TextFieldContentStyle>
                    <WallIcon/>
                    <div>
                        <TextFieldDefault label={'Altura (cm)'}
                                          width={160}>

                        </TextFieldDefault>
                        <h5>x</h5>
                        <TextFieldDefault label={'Comprimento (cm)'}
                                          width={160}>

                        </TextFieldDefault>
                    </div>
                </TextFieldContentStyle>
                <SlideContentStyled>
                    <WindowIcon/>
                    <Slider defaultValue={0}
                            valueLabelDisplay={'auto'}
                            step={1}
                            min={0}
                            max={5}/>
                </SlideContentStyled>
                <SlideContentStyled>
                    <DoorIcon/>
                    <Slider defaultValue={0}
                            valueLabelDisplay={'auto'}
                            step={1}
                            min={0}
                            max={5}/>
                </SlideContentStyled>
            </SubContentStyle>
        );
    }
}

WallComponent.propTypes = {
    title: PropTypes.string,
};

export default WallComponent;