import * as React from 'react';
import { View } from 'react-native';
import { Button } from "../../atoms";
import style from "./style";

const PlayButton = ({ bgColor, text, buttonBgColor }) => <View style={{ ...style.playButtonContainer, backgroundColor: bgColor }}>
    <Button bgColor={buttonBgColor} text={text} />
</View>;

export default PlayButton;