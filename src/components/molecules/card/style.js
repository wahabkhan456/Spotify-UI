import { StyleSheet } from 'react-native';
import { screenWidth } from '../../../constants/screen';

export default StyleSheet.create({
    cardContainer: {
        backgroundColor: '#25292a',
        width: screenWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12
    },
    cardSubContainer: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    titleContainer: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    descriptionContainer: {        
        color: '#d6d6d6',
        fontSize: 13,
        marginLeft: 10,
        textTransform: 'capitalize'
    }
})