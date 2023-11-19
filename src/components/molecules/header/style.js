import { StyleSheet, StatusBar } from 'react-native';
import { screenWidth } from '../../../constants/screen';

export default StyleSheet.create({
    headerContainer: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#25292a',
        width: screenWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
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