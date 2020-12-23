import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";
import { Constants } from '../../Constants/Constants';

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: Colors.background,
        borderWidth: 1,
        borderColor: Colors.secondary,
        paddingTop: 44,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Roboto',
        color: Colors.primaryDark,
        fontSize: 20,
    },
    numItemsOnCartContainer: {
        fontSize: 14,
        position: 'absolute',

        justifyContent: 'center',
        alignItems: 'center',

        width: 28,
        height: 28,

        // top: 0,
        bottom: 20,
        left: 20,

        backgroundColor: Colors.secondaryLight,
        borderRadius: 50,

    },
    numItemsOnCart: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.primaryDark
    },

    // SEARCH
    textInput: { 
        backgroundColor: Colors.background, 
        width: "90%",

        fontFamily: 'Roboto',
        color: Colors.secondaryDark,
        fontSize: 16
    },
})

export default styles