import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";
import { Constants } from '../../Constants/Constants';

const styles = StyleSheet.create({
    container: {
        margin: 2,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    scrollview: {
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    containerMenu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    line: {
        height: 30,
        width: 1, 
        backgroundColor: Colors.secondary
    },
    menuOption: {
        width: Dimensions.get('screen').width * 0.4,
        textAlign: 'center',
        textAlignVertical: 'center',

        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        flex: 1,
        backgroundColor: Colors.primaryLight,
        padding: 5,
        borderRadius: 5,
        elevation: 3,
    },
})

export default styles