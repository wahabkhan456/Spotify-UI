import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    miniPlayerContainer: {
        backgroundColor: '#40423f',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    miniPlayerSubContainer: {
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
    },
    iconContainer: {
        flexDirection: 'row',
        marginRight: 10
    }
})