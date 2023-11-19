import { StyleSheet } from 'react-native';
import { screenWidth, screenHeight } from '../../../constants/screen';

export default StyleSheet.create({
    mainContainer: {
        backgroundColor: '#25292a',
        width: screenWidth,
        height: screenHeight,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 12
    },
    textContainer: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})