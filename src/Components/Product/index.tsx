import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import styles from './styles'

interface ProductInterface {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
}

function Product(props: ProductInterface) {
    return (
        <TouchableOpacity style={styles.card}>
            <Image source={{ uri: props.image }} style={styles.image} />
            <Text style={styles.title} numberOfLines={2} >{props.title}</Text>
            <Text style={styles.price} >R$ {props.price}</Text>
        </TouchableOpacity>
    )
}

export default Product