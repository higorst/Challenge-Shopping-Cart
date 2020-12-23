import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import Header from '../Components/Header';
import Product from '../Components/Product';
import ShoppingCartStyles from '../styles/ShoppingCartStyles';
import { Constants } from '../Constants/Constants';
import BottomBar from '../Components/BottomBar';
import { Colors } from '../styles/Colors';

interface ProductInterface {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    amount: number
}

function ShoppingCart(props: any) {

    const navigation = useNavigation()

    const [items, setItems] = useState<ProductInterface[]>([])


    function handleToProduct(product: ProductInterface) {
        navigation.navigate(Constants.pageProduct, {
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
        })
    }

    useEffect(() => {
        setItems(props.items)
    }, [props.items])

    return (
        <View style={ShoppingCartStyles.container}>
            <Header
                title={items.length === 0 ? Constants.titleAddItemsOnCart : Constants.titleItemsOnCart}
                hideCart
                back
            />
            <ScrollView style={ShoppingCartStyles.scrollview} >
                <View style={ShoppingCartStyles.containerProducts}>
                    {items.map(product => {
                        return (
                            <Product
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                category={product.category}
                                image={product.image}
                                amount={product.amount}
                                cart

                                // onPressCard={() => handleToProduct(product)}
                                onPressImage={() => handleToProduct(product)}
                            />
                        )
                    })}
                </View>
            </ScrollView>
            {items.length === 0 && (
                <View style={ShoppingCartStyles.cardEmpty}>
                    <Icon
                        name={Constants.iconEmpty}
                        size={Constants.sizeIcon * 5}
                        color={Colors.primaryLight}
                    />
                    <Text style={ShoppingCartStyles.messageEmpty}>{Constants.titleButtonCartEmpty}</Text>
                    <TouchableOpacity style={ShoppingCartStyles.buttonEmpty} onPress={() => { navigation.navigate(Constants.pageMarketplace) }}>
                        <Text style={ShoppingCartStyles.buttonTextEmpty}>{Constants.titleButtonPagInitial}</Text>
                    </TouchableOpacity>
                </View>
            )}
            <BottomBar />
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    amount: state.cart.amount,
    items: state.cart.items,
});

export default connect(
    mapStateToProps,
)(ShoppingCart);