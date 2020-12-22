import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, FlatList } from 'react-native'

import { ScrollView } from 'react-native-gesture-handler';

import api from '../services/api';

import MarketplaceStyles from '../styles/MarketplaceStyles';

// COMPONENTS
import Product from '../Components/Product/index';
import Header from '../Components/Header/index';
import { Constants } from '../Constants/Constants';

interface ProductInterface {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
}

function Marketplace() {

    const [products, setProducts] = useState<ProductInterface[]>([])

    useEffect(() => {
        api.get('/products/')
            .then(response => {
                setProducts(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

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

export default Marketplace