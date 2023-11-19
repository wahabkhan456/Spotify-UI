import * as React from 'react';
import { View, Text } from 'react-native';
import { Icon, Picture } from "../../atoms";
import style from "./style";

const MiniPlayer = ({ image, title, description }) => <View style={style.miniPlayerContainer}>
    <View style={style.miniPlayerSubContainer}>
        <Picture uri={image} size={60} />
        <View>
            <Text style={style.titleContainer}>{title}</Text>
            <Text style={style.descriptionContainer}>{description}</Text>
        </View>
    </View>
    <View style={style.iconContainer}>
        <Icon name="heart" size={25} color="#1bbd54" />
        <Text>{"\t"}</Text>
        <Icon name="play" size={25} color="white" />
    </View>
</View>;

export default MiniPlayer;