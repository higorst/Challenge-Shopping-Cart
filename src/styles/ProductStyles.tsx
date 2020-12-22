import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { Constants } from '../Constants/Constants';

const ProductStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondaryLight,
    },
    scrollview: {
        flexGrow: 1,
    },
    scrollviewContent: {
        justifyContent: 'space-around',
        flexGrow: 1,
    },
    image: {
        width: Dimensions.get('screen').width * 0.6,
        height: Dimensions.get('screen').width * 0.6,

        alignSelf: 'center',

        margin: 15,
        borderRadius: 15,

        borderWidth: 1,
        borderColor: Colors.secondary
    },
    title: {
        fontSize: Constants.fontSizeTitleProduct,

        fontWeight: 'bold',
        fontFamily: 'Roboto',

        textAlign: 'center',
        textAlignVertical: 'center',

        marginLeft:15,
        marginRight: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    line: {
        flex: 1, 
        height: 1, 
        backgroundColor: Colors.secondary
    },
    headerSubtitle: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingRight: 15
    },
    subtitle: {
        fontSize: 15,
        color: Colors.secondaryDark,

        textAlign: "left",
        textAlignVertical: 'center',

        marginLeft: 15,
        marginRight: 15,
    },
    description: {
        margin: 15,
        fontSize: 15,

        textAlign: "justify",
    },
    price: {
        fontSize: 18,
        marginLeft: 15,
        color: Colors.secondaryDark,
        fontWeight: 'bold',
    },
    category: {
        margin: 15,
        fontSize: 15,

        textTransform: "capitalize",
    },

    containerButtons:{
        flexDirection: 'row',
        justifyContent: 'space-around',

        marginTop: 15,
        marginBottom: 15,
    },
    buttonCart: {
        width: Dimensions.get('screen').width * 0.35,
        padding: 7,

        borderWidth: 2,
        borderColor: Colors.iconDelete,
        backgroundColor: Colors.iconDelete,

        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',

        borderRadius: 10,
    },
    buttonBuy: {
        width: Dimensions.get('screen').width * 0.35,
        padding: 10,

        borderWidth: 2,
        borderColor: Colors.iconDelete,

        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',

        borderRadius: 10,
    },

    titleButtonCart: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: 'bold'
    },
    titleButtonBuy: {
        fontSize: 16,
        color: Colors.black,
        fontWeight: 'bold'
    },
})

export default ProductStyles