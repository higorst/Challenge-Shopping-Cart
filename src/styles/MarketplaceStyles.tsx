import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "./Colors";

const MarketplaceStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerProducts: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',

        // paddingTop: 25,

        justifyContent: 'center',
    },
    scrollviewProducts: {
        width: Dimensions.get('screen').width,
    },
})

export default MarketplaceStyles