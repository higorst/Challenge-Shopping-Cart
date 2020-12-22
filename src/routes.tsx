import React from 'react'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Provider } from 'react-redux';
import store from './redux'

const { Navigator, Screen } = createStackNavigator()

// PAGES
import Marketplace from './pages/Marketplace'
import Product from './pages/Product';
import ShoppingCart from './pages/ShoppingCart';

// COLORS
import { Colors } from './styles/Colors'
import { Constants } from './Constants/Constants';

// const store = configureStore()

function Routes() {
    return (
        <Provider store={store}>
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
                        name={Constants.pageMarketplace}
                        component={Marketplace}
                    />
                    <Screen
                        name={Constants.pageProduct}
                        component={Product}
                    />
                    <Screen
                        name={Constants.pageShoppingCart}
                        component={ShoppingCart}
                    />
                </Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default Routes