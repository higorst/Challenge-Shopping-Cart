import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, FlatList } from 'react-native'

import { ScrollView } from 'react-native-gesture-handler';

import MarketplaceStyles from '../styles/MarketplaceStyles';

import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import { SAGA_LOAD_PRODUCTS } from '../redux/sagas/types'

// COMPONENTS
import Product from '../Components/Product/index';
import Header from '../Components/Header/index';

import { Constants } from '../Constants/Constants';
import Menu from '../Components/Menu';

interface ProductInterface {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
}

function Marketplace({ productsSAGA }: any) {

    const navigation = useNavigation()

    const [products, setProducts] = useState<ProductInterface[]>([])
    const [categories, setCategories] = useState<string[]>([])

    function handleToProduct(product: ProductInterface){
        navigation.navigate(Constants.pageProduct, {
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
        })
    }

    function findCategories(products: ProductInterface[]){
        let categories: string[] = []
        for(const product of products){
            if (!categories.some(item => item === product.category)){
                categories.push(product.category)
            }
        }
        setCategories(categories)
    }

    useEffect(() => {
        setProducts(productsSAGA)
        findCategories(productsSAGA)
    }, [productsSAGA])

    return (
        <View style={MarketplaceStyles.container}>
            <Header 
                title={Constants.titleHeaderMarketplace} 
                search
            />
            <Menu 
                categories={categories}
            />
            <ScrollView style={MarketplaceStyles.scrollviewProducts} >
                <View style={MarketplaceStyles.containerProducts}>
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

                                onPressCard={() => handleToProduct(product)}
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
    productsSAGA: state.products.products
});

const mapDispatchToProps = (dispatch: any) => 
    dispatch({ type: SAGA_LOAD_PRODUCTS })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Marketplace);