import React from 'react'
import { Image, Text, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles'
import { Colors } from '../../styles/Colors';
import { Constants } from '../../Constants/Constants';

interface ProductInterface {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    onPressCard?: any
    onPressImage?: any
    onPressCartAdd?: any
}

function Product(props: ProductInterface) {

    function refactoringOfPrice(price: number){
        let new_price = price.toString().replace('.', ',')
        new_price = new_price.includes(',') ? new_price : new_price + ',00'
        new_price = new_price[new_price.length - 2] == ',' ? new_price + '0' : new_price
        return new_price
    }

    return (
        <TouchableWithoutFeedback onPress={props.onPressCard} style={styles.card}>

            <TouchableOpacity onPress={props.onPressImage}>
                <Image source={{ uri: props.image }} style={styles.image} />
            </TouchableOpacity>

            <View style={styles.about}>
                <Text style={styles.title} numberOfLines={2} >{props.title}</Text>
                <View style={styles.sidebyside}>
                    <Text style={styles.price} >R$ {refactoringOfPrice(props.price)}</Text>
                    <BorderlessButton onPress={props.onPressCartAdd}>
                        <Icon name={Constants.iconCartAdd} size={Constants.sizeIcon} color={Colors.iconAdd} />
                    </BorderlessButton>
                </View>
            </View>

        </TouchableWithoutFeedback>
    )
}

export default Product