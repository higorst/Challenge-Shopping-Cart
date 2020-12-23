import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'

import { ScrollView } from 'react-native-gesture-handler';

import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import Header from '../Components/Header';
import Product from '../Components/Product';
import ShoppingCartStyles from '../styles/ShoppingCartStyles';
import { Constants } from '../Constants/Constants';

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
                title={items.length === 0 ? 'Adicione itens ao carrinho' : 'Itens Selecionados'}
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