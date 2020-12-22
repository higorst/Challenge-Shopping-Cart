import React from 'react'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

// PAGES
import Marketplace from './pages/Marketplace'
import Product from './pages/Product';
import ShoppingCart from './pages/ShoppingCart';

// COLORS
import { Colors } from './styles/Colors'

function Routes() {
    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor={Colors.background}
                barStyle="dark-content"
                translucent
                animated
            />
            <Navigator screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: Colors.background
                }
            }} >
                <Screen
                    name="Marketplace"
                    component={Marketplace}
                />
                <Screen
                    name="Product"
                    component={Product}
                    options={{
                        headerShown: true,
                        // header: () => <Header showCancel={false} title='Orfanato' />
                    }}
                />
                <Screen
                    name="ShoppingCart"
                    component={ShoppingCart}
                    options={{
                        headerShown: true,
                        // header: () => <Header showCancel={false} title='Orfanato' />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}

export default Routes