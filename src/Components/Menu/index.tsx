import React, { useState, useEffect, } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Option from './Option/index';
import { ScrollView } from 'react-native-gesture-handler';
import { Constants } from '../../Constants/Constants';


import { connect } from "react-redux";
import { SAGA_ADD_CATEGORY } from '../../redux/sagas/types'
import { Colors } from '../../styles/Colors';

function Menu(props: any) {

    const [categories, setCategories] = useState<string[]>([])
    const [allCategories, setAllCategories] = useState<string[]>([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        setCategories(props.categoriesSAGA)
    }, [props.categoriesSAGA])

    useEffect(() => {
        setAllCategories(props.allCategories)
    }, [props.allCategories])

    return (
        <View style={styles.container}>
            <Modal isVisible={showModal}>
                <View style={styles.modal}>
                    {allCategories.map((category: string) => {
                        if (categories.includes(category) && categories.length !== 0) {
                            return (
                                <View key={category} />
                            )
                        } else {
                            return (
                                <TouchableOpacity key={category} style={styles.itemModal} onPress={() => {
                                    props.dispatch({ type: SAGA_ADD_CATEGORY, category: category })
                                    setShowModal(!showModal)
                                }}>
                                    <Icon
                                        name={Constants.iconFilterAdd}
                                        size={Constants.sizeIcon * 1.2}
                                        color={Colors.secondaryDark}
                                    />
                                    <Text style={styles.textItemModal}>{category}</Text>
                                </TouchableOpacity>
                            )
                        }
                    })}
                </View>
            </Modal>

            <View style={styles.containerMenu}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    setShowModal(allCategories.length === categories.length ? showModal : !showModal)
                }}>
                    <Text style={styles.menuOption}>{Constants.titleMenuFilter}</Text>
                    <Icon
                        name={Constants.iconFilter}
                        size={Constants.sizeIcon}
                        color={Colors.white}
                    />
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.menuOption}>{Constants.titleMenuOrder}</Text>
                    <Icon
                        name={Constants.iconOrder}
                        size={Constants.sizeIcon}
                        color={Colors.white}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal style={styles.scrollview} >
                {categories.map((category: string) => {
                    return <Option title={category} key={category} />
                })}
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    categoriesSAGA: state.categories.categories,
    allCategories: state.products.categories,
});

export default connect(
    mapStateToProps,
)(Menu);