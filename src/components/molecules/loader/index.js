import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { screenHeight } from '../../../constants/screen';
import style from "./style";

const Loader = ({ fullscreen }) => <View style={{ ...style.loaderContainer, height: fullscreen ? screenHeight : 0 }}>
    <ActivityIndicator size={40} color="white" />
</View>;

export default Loader;