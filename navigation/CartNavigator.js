import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants/colors";  

import CartScreen from "../screen/CartScreen"

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Categories"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? COLORS.primary : COLORS.accent
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                    headerTitleStyle:{
                        fontWeight: 'bold'
                    }
                }}
            >
            <Stack.Screen name="Cart" component={CartScreen} option={{title: 'Carrito'}}/>
        </Stack.Navigator>
    )
}