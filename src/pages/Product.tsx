import React, { useState, useEffect } from 'react'
import { Text, View, Image } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'
import ProductStyles from '../styles/ProductStyles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient'

// COMPONENTS
import Header from '../Components/Header/index';

import { Constants } from '../Constants/Constants';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../styles/Colors';

interface ProductInterface {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
}

function Products(props: any) {

    // load product
    const route = useRoute()
    const params = route.params as ProductInterface

    const [productId, setProductId] = useState<number>()
    const [productTitle, setProductTitle] = useState<string>()
    const [productPrice, setProductPrice] = useState<number>(0)
    const [productDescription, setProductDescription] = useState<string>()
    const [productCategory, setProductCategory] = useState<string>()
    const [productImage, setProductImage] = useState<string>()

    function refactoringOfPrice(price: number) {
        let new_price = price.toString().replace('.', ',')
        new_price = new_price.includes(',') ? new_price : new_price + ',00'
        new_price = new_price[new_price.length - 2] == ',' ? new_price + '0' : new_price
        return new_price
    }

    useEffect(() => {
        setProductId(params.id)
        setProductTitle(params.title)
        setProductPrice(params.price)
        setProductDescription(params.description)
        setProductCategory(params.category)
        setProductImage(params.image)
    }, [params])

    return (
        <View style={ProductStyles.container}>
            <Header
                title={Constants.titleHeaderProduct}
                back
            />

            <LinearGradient
                colors={[Colors.background, Colors.secondaryLight]}
                style={{flex: 1}}
            >

                <ScrollView contentContainerStyle={ProductStyles.scrollview}>
                    <View style={ProductStyles.scrollviewContent}>
                        <Image source={{ uri: productImage }} style={ProductStyles.image} />
                        <Text style={ProductStyles.title}>{productTitle}</Text>
                        <Text style={ProductStyles.price}>R$ {refactoringOfPrice(productPrice)}</Text>

                        <View>
                            <View style={ProductStyles.headerSubtitle}>
                                <Text style={ProductStyles.subtitle}>Descrição</Text>
                                <View style={ProductStyles.line} />
                            </View>
                            <Text style={ProductStyles.description}>{productDescription}</Text>
                        </View>

                        <View>
                            <View style={ProductStyles.headerSubtitle}>
                                <Text style={ProductStyles.subtitle}>Categoria</Text>
                                <View style={ProductStyles.line} />
                            </View>
                            <Text style={ProductStyles.category}>{productCategory}</Text>
                        </View>

                        <View style={ProductStyles.containerButtons}>
                            <TouchableOpacity style={ProductStyles.buttonCart}>
                                <Text style={ProductStyles.titleButtonCart}>ADICIONAR</Text>
                                <Icon name={Constants.iconCartAdd} size={Constants.sizeIcon} color={Colors.white} />
                            </TouchableOpacity>
                            <TouchableOpacity style={ProductStyles.buttonBuy}>
                                <Text style={ProductStyles.titleButtonBuy}>COMPRE AGORA</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            
            </LinearGradient>
        </View>
    )
}

export default Products