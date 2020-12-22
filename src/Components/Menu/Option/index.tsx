import React from 'react'
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

function Option(props: any) {
    function handleRemove(){
        console.log('remove', props.title)
    }
    return (
        <View>
            <View style={styles.container}>
                <Text>{props.title}</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={handleRemove}>
                    <Icon name={'close-circle'} size={20} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Option