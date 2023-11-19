import * as React from 'react';
import { View, Text } from 'react-native';
import { Icon, Picture } from "../../atoms";
import style from "./style";

const Card = ({ image, title, description }) => <View style={style.cardContainer}>
    <View style={style.cardSubContainer}>
        <Picture uri={image} size={60} />
        <View>
            <Text style={style.titleContainer}>{title}</Text>
            <Text style={style.descriptionContainer}>{description}</Text>
        </View>
    </View>
    <Icon name="ellipsis-vertical" size={25} color="white" />
</View>;

export default Card;