import * as React from 'react';
import style from "./style";
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ bgColor, text }) => <TouchableOpacity style={{ ...style.buttonContainer, backgroundColor: bgColor }}>
    <Text style={style.textContainer}>{text}</Text>
</TouchableOpacity>;

export default Button;