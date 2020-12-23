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

function Marketplace({ productsSAGA, categoriesSAGA }: any) {

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

    useEffect(() => {
        setProducts(productsSAGA)
    }, [productsSAGA])

    useEffect(() => {
        setCategories(categoriesSAGA)
    }, [categoriesSAGA])

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
                        if (categoriesSAGA.includes(product.category) || categoriesSAGA.length === 0){
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
                        } else {
                            return (
                                <View key={product.id} />
                            )
                        }
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    productsSAGA: state.products.products,
    categoriesSAGA: state.categories.categories,
});

const mapDispatchToProps = (dispatch: any) => 
    dispatch({ type: SAGA_LOAD_PRODUCTS })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Marketplace);