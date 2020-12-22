import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, FlatList } from 'react-native'

import { ScrollView } from 'react-native-gesture-handler';

import api from '../services/api';

import MarketplaceStyles from '../styles/MarketplaceStyles';

import { connect } from "react-redux";
import { loadProducts } from '../redux/Actions'

import { SAGA_LOAD_PRODUCTS } from '../redux/sagas/types'

// COMPONENTS
import Product from '../Components/Product/index';
import Header from '../Components/Header/index';
import { Constants } from '../Constants/Constants';
import products from '../redux/reducers/products';

interface ProductInterface {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
}

function Marketplace({ productsSAGA }: any) {

    const [products, setProducts] = useState<ProductInterface[]>([])

    useEffect(() => {
        setProducts(productsSAGA.products)
    }, [productsSAGA])

    return (
        <View>
            <Header title={Constants.titleHeaderMarketplace} />
            <ScrollView style={MarketplaceStyles.scrollviewProducts} >
                <View style={MarketplaceStyles.container}>
                    {products.map(product => {
                        return (
                            <Product
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                category={product.category}
                                image={product.image}
                            />
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    productsSAGA: state.products
});

const mapDispatchToProps = (dispatch: any) => 
    loadProducts(dispatch({ type: SAGA_LOAD_PRODUCTS }))

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Marketplace);