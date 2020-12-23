import React from 'react'
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import { Constants } from '../../../Constants/Constants';

import { connect } from "react-redux";
import { SAGA_REMOVE_CATEGORY } from '../../../redux/sagas/types'

function Option(props: any) {
    return (
        <View>
            <View style={styles.container}>
                <Text>{props.title}</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => {
                    props.dispatch({ type: SAGA_REMOVE_CATEGORY, category: props.title })
                }}>
                    <Icon name={Constants.iconCloseOption} size={20} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = (state: any) => ({
    categoriesSAGA: state.categories.categories
});

export default connect(
    mapStateToProps,
)(Option);