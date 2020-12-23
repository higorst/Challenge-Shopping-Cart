import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";
import { Constants } from '../../Constants/Constants';

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: Colors.background,
        borderWidth: 1,
        borderColor: Colors.secondary,
        // paddingTop: 44,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    section1: {
        width: Dimensions.get('screen').width * 0.4,
        alignItems: 'flex-start',
        justifyContent: 'center',
    }, 
    section2: {
        width: Dimensions.get('screen').width * 0.6,
        flexDirection: 'column',

        justifyContent: 'space-between'
    }, 

    total: {
        fontSize: 14,
        fontWeight: 'bold',

        color: Colors.secondaryDark,
    },
    priceTotal: {
        fontSize: Constants.fontSizePriceCard + 4,
        fontWeight: 'bold',

        color: Colors.primary,
    },


    button: {
        width: Dimensions.get('screen').width * 0.45,
        padding: 11,

        // borderWidth: 2,
        borderColor: Colors.iconDelete,
        backgroundColor: Colors.iconDelete,

        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',

        borderRadius: 10,
    },
    buttontext: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: 'bold'
    },

    modal: {
        flex: 1, 
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        backgroundColor: Colors.background,

        flexDirection: 'column', 
        position: 'absolute', 

        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        alignSelf: 'center',

        elevation: 5,
        // flexGrow: 1,
    },
    cardEmpty: {
        flex: 1,
        width: Dimensions.get('screen').width * 0.6,
        backgroundColor: Colors.background,

        bottom: Dimensions.get('screen').height * 0.2,

        justifyContent: 'space-evenly',
        alignItems: 'center',

        alignSelf: 'center',
        borderRadius: 15,
    },
    message: {
        fontSize: 22,
        textAlign: 'center',
    },
    messagePrice: {
        fontSize: 22,
        fontWeight: 'bold',

        textAlign: 'center',

        color: Colors.primary,
    },
    buttonEmpty: {
        width: Dimensions.get('screen').width * 0.45,
        padding: 11,

        // borderWidth: 2,
        borderColor: Colors.iconDelete,
        backgroundColor: Colors.iconDelete,

        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',

        borderRadius: 10,
    },
    buttonTextEmpty: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: 'bold'
    },
})

export default styles