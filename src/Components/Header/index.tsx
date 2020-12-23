import React, { useState, useEffect } from 'react'
import { Text, View, TextInput } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from "react-redux";

import styles from './styles';
import { Constants } from '../../Constants/Constants';
import { Colors } from '../../styles/Colors';

interface PropsHeader {
    title?: string
    back?: boolean
    search?: boolean
    hideCart?: boolean
    onProduct?: boolean
    amount?: any
}


function Header(props: PropsHeader) {

    const navigation = useNavigation()

    const [enableSearch, setEnableSearch] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [itemsOnCart, setItemsOnCart] = useState(0)

    function handleToShoppingCart() {
        navigation.navigate(Constants.pageShoppingCart)
    }


    useEffect(() => {
        setItemsOnCart(props.amount)
    }, [props.amount])

    return (
        <View>
            <View style={styles.container}>
                {props.back && (<BorderlessButton onPress={() => {
                    if (props.onProduct) {
                        navigation.navigate(Constants.pageMarketplace)
                    } else {
                        navigation.goBack()
                    }
                }}>
                    <Icon name={Constants.iconBack} size={Constants.sizeIcon} color={Colors.primary} />
                </BorderlessButton>)}

                <Text style={styles.title}>{props.title}</Text>

                <BorderlessButton onPress={handleToShoppingCart}>
                    <Icon
                        name={itemsOnCart > 0 ? Constants.iconCartFull : Constants.iconCart}
                        size={Constants.sizeIcon * 1.2}
                        color={itemsOnCart > 0 ? Colors.secondaryDark : Colors.primary}
                    />
                    {itemsOnCart > 0 && (
                        <View style={styles.numItemsOnCartContainer}>
                            <Text style={styles.numItemsOnCart}>{itemsOnCart}</Text>
                        </View>
                    )}
                </BorderlessButton>
            </View>
        </View>

    )

}

const mapStateToProps = (state: any) => ({
    amount: state.cart.amount,
});

export default connect(
    mapStateToProps,
)(Header);