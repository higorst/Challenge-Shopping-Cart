import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";
import { Constants } from '../../Constants/Constants';


const stylesCart = StyleSheet.create({
    card: {
        flex: 1,
        width: Dimensions.get('screen').width * 1,
        // margin: 10,
        elevation: 3,
        backgroundColor: Colors.backgroundCard,

        marginTop: 5,
        marginBottom: 5,

        flexDirection: 'row',
    },
    section1: {
        width: Dimensions.get('screen').width * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    section2: {
        width: Dimensions.get('screen').width * 0.7,
        flexDirection: 'column',

        justifyContent: 'space-between'
    }, 

    totalCost: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        alignSelf: 'center',
    },


    price: {
        fontSize: 12,
        fontWeight: 'bold',

        color: Colors.secondaryDark,
    },
    priceTotal: {
        fontSize: Constants.fontSizePriceCard + 2,
        fontWeight: 'bold',

        color: Colors.primary,
    },

    sidebyside: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        alignItems: 'center',

        marginBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },
    amount: {
        flexDirection: 'row',
        justifyContent: 'center',

        alignItems: 'center',

        marginBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },
    amountNumber: {
        fontSize: Constants.fontSizeTitleCard,
        fontWeight: 'bold',

        textAlign: 'center',
        textAlignVertical: 'center',

        marginLeft: 15,
        marginRight: 15,

        color: Colors.secondaryDark,

        // marginLeft:15,
        // marginRight: 15,
        // marginTop: 10,
        // marginBottom: 10,
    },


    image: {
        width: Dimensions.get('screen').width * 0.3 - 30,
        height: Dimensions.get('screen').width * 0.3 - 30,

        margin: 15,
        alignSelf: 'center',

        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    title: {
        fontSize: Constants.fontSizeTitleCard,
        fontWeight: 'bold',

        textAlign: 'center',
        textAlignVertical: 'center',

        marginLeft:15,
        marginRight: 15,
        marginTop: 10,
        marginBottom: 10,
    },


    lineVertical: {
        flex: 1,
        width: 1,
        backgroundColor: Colors.primaryLight
    },
})

export default stylesCart