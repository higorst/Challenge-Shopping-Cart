import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";
import { Constants } from '../../Constants/Constants';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    modal: {
        // flex: 1, 
        width: Dimensions.get('screen').width * 0.7,
        // height: 300,
        backgroundColor: Colors.white,

        flexDirection: 'column', 
        position: 'absolute', 

        justifyContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center',

        elevation: 5,
        // flexGrow: 1,
    },
    itemModal: {
        // elevation: 6,
        margin: 5,
        padding: 15,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.7,
    },
    textItemModal:{
        margin: 15,
        fontSize: 15,

        textTransform: "capitalize",
        color: Colors.primary,
    },
    scrollview: {
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    containerMenu: {
        flexDirection: 'row',
        // justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    line: {
        height: 30,
        width: 1, 
        backgroundColor: Colors.secondary,

        marginLeft: 5,
        marginRight: 5,
    },
    menuOption: {
        // width: Dimensions.get('screen').width * 0.4,
        // textAlign: 'center',
        textAlignVertical: 'center',

        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        // flex: 1,

        // width: Dimensions.get('screen').width * 0.4,


        flexDirection: 'row',
        justifyContent: 'space-evenly',

        position: 'absolute',
        bottom: -5,
        left: 5,
        
        borderRadius: 100,
        elevation: 3,

        backgroundColor: Colors.primaryLight,
        padding: 5,
    },
})

export default styles