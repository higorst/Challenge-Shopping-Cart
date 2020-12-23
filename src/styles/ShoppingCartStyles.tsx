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
        width: Dimensions.get('screen').width,
    },
})

export default ShoppingCartStyles