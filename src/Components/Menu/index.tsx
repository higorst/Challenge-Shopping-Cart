import React from 'react'
import { Text, View } from 'react-native';

import styles from './styles';

import Option from './Option/index';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Constants } from '../../Constants/Constants';

function Menu(props: any) {
    return (
        <View style={styles.container}>
            <View style={styles.containerMenu}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.menuOption}>{Constants.titleMenuFilter}</Text>
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.menuOption}>{Constants.titleMenuOrder}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal style={styles.scrollview} >
                {props.categories.map((category: string) => {
                    return <Option title={category} />
                })}
            </ScrollView>
        </View>
    )
}

export default Menu