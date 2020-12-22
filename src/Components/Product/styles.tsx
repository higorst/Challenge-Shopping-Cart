import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";

const size_card = 0.4

const styles = StyleSheet.create({
    card: {
        width: Dimensions.get('screen').width * size_card,
        margin: 10,
        elevation: 3,
        backgroundColor: Colors.backgroundCard,

        borderRadius: 15,
    },
    image: {
        width: Dimensions.get('screen').width * size_card,
        height: Dimensions.get('screen').width * size_card,

        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',

        textAlign: 'center',
        margin: 15,
    },
    price: {
        fontSize: 14,

        fontStyle: 'italic',

        marginBottom: 10,
        marginLeft: 15,
    },
})

export default styles