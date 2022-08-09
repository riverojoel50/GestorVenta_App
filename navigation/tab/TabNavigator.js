import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons'

import ShopNavigator from "../ShopNavigator";
import CartNavigator from "../CartNavigator";

const Bottomtabs = createBottomTabNavigator();

export default TabNavigator = () => {
    return (
        <Bottomtabs.Navigator initialRouteName="Shop" screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar
        }}>
            <Bottomtabs.Screen name="ShopTab" component={ShopNavigator}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={styles.item}>
                            <Ionicons name="md-home" size={24} color="black"/>
                            <Text>Tienda</Text>
                        </View>
                    )
                }}
                />
            <Bottomtabs.Screen name="CartTab" component={CartNavigator}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={styles.item}>
                            <Ionicons name="md-cart" size={24} color="black"/>
                            <Text>Tienda</Text>
                        </View>
                    )
                }}
                />
        </Bottomtabs.Navigator>
        )
}

const styles = StyleSheet.create({
    tabBar:{
        shadowColor: '#/f5df0',
        shadowOffSet: {width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90
    },
    item:{
        flex: 1,
        justifyContent: 'center',
        aligntItems: 'center'
    }
})