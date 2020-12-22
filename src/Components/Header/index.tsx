import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import { Constants } from '../../Constants/Constants';
import { Colors } from '../../styles/Colors';

interface PropsHeader {
    title?: string
}

const num_itens = 3

function Header(props: PropsHeader) {

    const navigation = useNavigation()

    const [enableSearch, setEnableSearch] = useState(false)
    const [searchText, setSearchText] = useState('')

    function handleToMarketplace() {
        navigation
    }

    return (
            <View>
                {!enableSearch && (
                    <View style={styles.container}>
                <Text style={styles.title}>{props.title}</Text>

                <BorderlessButton onPress={() => setEnableSearch(!enableSearch)}>
                    <Icon name={Constants.iconSearch} size={Constants.sizeIcon * 1.2} color={Colors.primary} />
                </BorderlessButton>

                <BorderlessButton onPress={handleToMarketplace}>
                    <Icon
                        name={num_itens > 0 ? Constants.iconCartFull : Constants.iconCart}
                        size={Constants.sizeIcon * 1.2}
                        color={num_itens > 0 ? Colors.secondaryDark : Colors.primary}
                    />
                    {num_itens > 0 && (
                        <View style={styles.numItemsOnCartContainer}>
                            <Text style={styles.numItemsOnCart}>{num_itens}</Text>
                        </View>
                    )}
                </BorderlessButton>
                    </View>
                )}

                {enableSearch && (
                    <View style={styles.container}>
                        <BorderlessButton onPress={() => setEnableSearch(!enableSearch)}>
                            <Icon name={Constants.iconBack} size={Constants.sizeIcon} color={Colors.primary} />
                        </BorderlessButton>
    
                        <TextInput
                            placeholder="Digite sua busca"
                            // Type='outlined'
                            maxLength={60}
                            // underlineColor={Colors.background}
                            style={styles.textInput}
                            value={searchText}
                            onChangeText={text => setSearchText(text)}
                        />
    
                    </View>
                )}
            </View>

    )

}

export default Header