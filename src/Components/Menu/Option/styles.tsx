import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../../styles/Colors";
import { Constants } from '../../../Constants/Constants';

const styles = StyleSheet.create({
    container: {
        // flex: 1,

        elevation: 3,

        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 5,

        margin: 5,
        marginBottom: 10,
        borderRadius: 5,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondaryLight,
    },
    button: {
        position: "absolute",
        borderRadius: 100,
        elevation: 4,
        right: 0,
        top: 0,
    },
})

export default styles