import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";
import { Constants } from '../../Constants/Constants';

const size_card = 0.43

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: Dimensions.get('screen').width * size_card,
        margin: 10,
        elevation: 3,
        backgroundColor: Colors.backgroundCard,

        borderRadius: 15,
    },
    about: {
        justifyContent: 'space-between'
    },
    sidebyside: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    image: {
        width: Dimensions.get('screen').width * size_card,
        height: Dimensions.get('screen').width * size_card,

        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    title: {
        height: 40,

        fontSize: Constants.fontSizeTitleCard,
        fontWeight: 'bold',

        textAlign: 'center',
        textAlignVertical: 'center',

        marginLeft:15,
        marginRight: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    price: {
        fontSize: Constants.fontSizePriceCard,
        // fontStyle: 'italic',
        fontWeight: 'bold',

        color: Colors.secondaryDark,
    },
})

export default styles