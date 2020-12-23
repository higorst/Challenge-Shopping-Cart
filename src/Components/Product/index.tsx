import React from 'react'
import { Image, Text, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from "react-redux";
import {
    SAGA_ADD_ITEM_CART,
    SAGA_REMOVE_ITEM_CART,
    SAGA_UPDATE_ITEM_CART,
} from '../../redux/sagas/types'

import styles from './styles'
import { Colors } from '../../styles/Colors';
import { Constants } from '../../Constants/Constants';
import stylesCart from './stylesCart';

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
    amount?: number
    cart?: boolean
    dispatch: any
}

function Product(props: ProductInterface) {

    function refactoringOfPrice(price: number) {
        let new_price = price.toString().replace('.', ',')
        new_price = new_price.includes(',') ? new_price : new_price + ',00'
        new_price = new_price[new_price.length - 2] == ',' ? new_price + '0' : new_price
        return new_price
    }

    if (props.cart) {
        return (
            <TouchableWithoutFeedback onPress={props.onPressCard} style={stylesCart.card}>

                <View style={stylesCart.section1}>
                    <TouchableOpacity onPress={props.onPressImage}>
                        <Image source={{ uri: props.image }} style={stylesCart.image} />
                    </TouchableOpacity>
                </View>

                <View style={stylesCart.section2}>
                    <Text style={stylesCart.title} >{props.title}</Text>
                    <View style={stylesCart.amount}>
                        <BorderlessButton onPress={() => {
                            props.dispatch({
                                type: SAGA_UPDATE_ITEM_CART, item: {
                                    id: props.id,
                                    title: props.title,
                                    price: props.price,
                                    description: props.description,
                                    category: props.category,
                                    image: props.image,
                                    amount: (props.amount ? props.amount : 1) - 1
                                }
                            })
                        }}>
                            <Icon name={'minus-circle'} size={Constants.sizeIcon} color={Colors.primary} />
                        </BorderlessButton>
                        <Text style={stylesCart.amountNumber}>{props.amount}</Text>
                        <BorderlessButton onPress={() => {
                            props.dispatch({
                                type: SAGA_UPDATE_ITEM_CART, item: {
                                    id: props.id,
                                    title: props.title,
                                    price: props.price,
                                    description: props.description,
                                    category: props.category,
                                    image: props.image,
                                    amount: (props.amount ? props.amount : 1) + 1
                                }
                            })
                        }}>
                            <Icon name={'plus-circle'} size={Constants.sizeIcon} color={Colors.primary} />
                        </BorderlessButton>
                    </View>
                    <View style={stylesCart.sidebyside}>
                        <View style={stylesCart.totalCost}>
                            <Text style={stylesCart.price}>
                                {props.amount} x R$ {refactoringOfPrice(props.price)}
                            </Text>
                            <Text style={stylesCart.priceTotal}>
                                R$ {refactoringOfPrice(props.price * (props.amount ? props.amount : 1))}
                            </Text>
                        </View>
                        <BorderlessButton onPress={() => {
                            props.dispatch({
                                type: SAGA_REMOVE_ITEM_CART, item: {
                                    id: props.id,
                                    title: props.title,
                                    price: props.price,
                                    description: props.description,
                                    category: props.category,
                                    image: props.image,
                                    amount: 1
                                }
                            })
                        }}>
                            <Icon name={Constants.iconCartDelete} size={Constants.sizeIcon} color={Colors.iconDelete} />
                        </BorderlessButton>
                    </View>
                </View>


            </TouchableWithoutFeedback>
        )
    } else {
        return (
            <TouchableWithoutFeedback onPress={props.onPressCard} style={styles.card}>

                <TouchableOpacity onPress={props.onPressImage}>
                    <Image source={{ uri: props.image }} style={styles.image} />
                </TouchableOpacity>

                <View style={styles.about}>
                    <Text style={styles.title} numberOfLines={2} >{props.title}</Text>
                    <View style={styles.sidebyside}>
                        <Text style={styles.price} >R$ {refactoringOfPrice(props.price)}</Text>
                        <BorderlessButton onPress={() => {
                            props.dispatch({
                                type: SAGA_ADD_ITEM_CART, item: {
                                    id: props.id,
                                    title: props.title,
                                    price: props.price,
                                    description: props.description,
                                    category: props.category,
                                    image: props.image,
                                    amount: 1
                                }
                            })
                        }}>
                            <Icon name={Constants.iconCartAdd} size={Constants.sizeIcon} color={Colors.iconAdd} />
                        </BorderlessButton>
                    </View>
                </View>

            </TouchableWithoutFeedback>
        )
    }

}


export default connect()(Product);