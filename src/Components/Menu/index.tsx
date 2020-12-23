import React, { useState, useEffect, } from 'react'
import { Text, View } from 'react-native';

import styles from './styles';

import Option from './Option/index';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Constants } from '../../Constants/Constants';

import { connect } from "react-redux";
import { SAGA_ADD_CATEGORY } from '../../redux/sagas/types'

function Menu(props: any) {
    const [categories, setCategories] = useState<string[]>([])

    useEffect(() => {
        setCategories(props.categoriesSAGA)
    }, [props])

    return (
        <View style={styles.container}>
            <View style={styles.containerMenu}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    props.dispatch({ type: SAGA_ADD_CATEGORY, category: props.title })
                }}>
                    <Text style={styles.menuOption}>{Constants.titleMenuFilter}</Text>
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.menuOption}>{Constants.titleMenuOrder}</Text>
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
    categoriesSAGA: state.categories.categories
});

export default connect(
    mapStateToProps,
)(Menu);