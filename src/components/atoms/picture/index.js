import * as React from 'react';
import { Image } from 'react-native';

const Picture = ({ uri, size }) =>  <Image source={{ uri }} style={{ width: size, height: size }} />;

export default Picture;