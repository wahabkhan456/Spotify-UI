import * as React from 'react';
import { View, Text } from 'react-native';
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import style from "./style";

const MainContent = ({ name }) => {
    let bottomTabBarHeight = useBottomTabBarHeight();

    return <View style={{ ...style.mainContainer, height: style.mainContainer.height - bottomTabBarHeight }}>
        <Text style={style.textContainer}>Welcome to {name} screen</Text>
    </View>
};

export default MainContent;