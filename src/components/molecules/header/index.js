import * as React from 'react';
import { View, Text } from 'react-native';
import { Icon } from "../../atoms";
import style from "./style";

const Header = ({ title }) => <View style={style.headerContainer}>
    <Icon name="arrow-back" size={25} color="white" />
    <Text style={style.textContainer}>{title}</Text>
    <Icon name="ellipsis-vertical" size={25} color="white" />
</View>;

export default Header;