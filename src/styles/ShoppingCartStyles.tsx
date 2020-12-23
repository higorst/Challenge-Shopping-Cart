import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { Constants } from '../Constants/Constants';

const ShoppingCartStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondaryLight,
    },
    containerProducts: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',

        // paddingTop: 25,

        justifyContent: 'center',
    },
    scrollview: {
        width: Dimensions.get('screen').width
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
    messageEmpty: {
        fontSize: 18,
        textAlign: 'center',
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

export default ShoppingCartStyles