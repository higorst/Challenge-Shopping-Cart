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
    back?: boolean
    search?: boolean
}


function Header(props: PropsHeader) {

    const navigation = useNavigation()

    const [enableSearch, setEnableSearch] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [itemsOnCart, setItemsOnCart] = useState(2)

    // function handleToMarketplace() {
    //     navigation
    // }
    function handleToShoppingCart(){
        navigation.navigate(Constants.pageShoppingCart)
    }

    return (
        <View>
            {!enableSearch && (
                <View style={styles.container}>
                    {props.back && (<BorderlessButton onPress={navigation.goBack}>
                        <Icon name={Constants.iconBack} size={Constants.sizeIcon} color={Colors.primary} />
                    </BorderlessButton>)}

                    <Text style={styles.title}>{props.title}</Text>

                    {props.search && (<BorderlessButton onPress={() => setEnableSearch(!enableSearch)}>
                        <Icon name={Constants.iconSearch} size={Constants.sizeIcon * 1.2} color={Colors.primary} />
                    </BorderlessButton>)}

                    <BorderlessButton onPress={handleToShoppingCart}>
                        <Icon
                            name={itemsOnCart > 0 ? Constants.iconCartFull : Constants.iconCart}
                            size={Constants.sizeIcon * 1.2}
                            color={itemsOnCart > 0 ? Colors.secondaryDark : Colors.primary}
                        />
                        {itemsOnCart > 0 && (
                            <View style={styles.numItemsOnCartContainer}>
                                <Text style={styles.numItemsOnCart}>{itemsOnCart}</Text>
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