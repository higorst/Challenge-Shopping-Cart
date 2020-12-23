import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from "react-redux";
import { SAGA_FINISH_BUY } from '../../redux/sagas/types';

import styles from './styles';
import { Constants } from '../../Constants/Constants';
import { Colors } from '../../styles/Colors';

interface ProductInterface {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    amount: number
}

function Header(props: any) {

    const navigation = useNavigation()

    const [itemsOnCart, setItemsOnCart] = useState<ProductInterface[]>([])
    const [showModal, setShowModal] = useState(false)
    const [price, setPrice] = useState('0.00')

    function handlePrice() {
        let priceTotal = 0
        for (const product of itemsOnCart) {
            priceTotal += product.price * product.amount
        }
        priceTotal = parseFloat(priceTotal.toFixed(2))
        let new_price = priceTotal.toString().replace('.', ',')
        new_price = new_price.includes(',') ? new_price : new_price + ',00'
        new_price = new_price[new_price.length - 2] == ',' ? new_price + '0' : new_price
        return priceTotal > 0 ? new_price : price
    }

    useEffect(() => {
        setItemsOnCart(props.amount)
    }, [props.amount])

    useEffect(() => {
        setItemsOnCart(props.itemsOnCartSAGA)
    }, [props.itemsOnCartSAGA])

    useEffect(() => {
        setPrice(handlePrice())
    }, [itemsOnCart])

    return (
        <View>
            <Modal isVisible={showModal}>
                <View style={styles.modal}>
                        <Text style={styles.message}>{Constants.messageFinish}</Text>

                        <Text style={styles.messagePrice}>R$ {price}</Text>

                    <Icon
                        name={Constants.iconFinish}
                        size={Constants.sizeIcon * 5}
                        color={Colors.primaryLight}
                    />

                    <TouchableOpacity style={styles.buttonEmpty} onPress={() => { navigation.navigate(Constants.pageMarketplace) }}>
                        <Text style={styles.buttonTextEmpty}>{Constants.titleButtonPagInitial}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            {itemsOnCart.length > 0 && (
                <View style={styles.container}>
                    <View style={styles.section1}>
                        <Text style={styles.total}>{Constants.titlePriceTotal}</Text>
                        <Text style={styles.priceTotal}>R$ {price}</Text>

                    </View>

                    <View style={styles.section2}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            setShowModal(!showModal)
                            props.dispatch({ type: SAGA_FINISH_BUY })
                        }}>
                            <Text style={styles.buttontext}>{Constants.titleFinish}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

        </View>

    )

}

// export default Header
const mapStateToProps = (state: any) => ({
    amount: state.cart.amount,
    itemsOnCartSAGA: state.cart.items,
});

export default connect(
    mapStateToProps,
)(Header);