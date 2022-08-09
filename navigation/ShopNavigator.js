import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants/colors";  

import HomeScreen from "../screen/HomeScreen";
import LoginScreen from "../screen/LoginScreen";
import CategoryArticleScreen from "../screen/CategoryArticleScreen"
import CategoriesScreen from "../screen/CategoriesScreen";
import ArticleDetailScreen from "../screen/ArticleDetailScreen"
import CartScreen from "../screen/CartScreen"

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
    return (
        <NavigationContainer>
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
                <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Login'}}/>            
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Categories" component={CategoriesScreen}/>
                <Stack.Screen name="Articles" component={CategoryArticleScreen}
                    options={({route}) => ({ //recibe por parametro el titulo
                        title: route.params.name,
                    })}/>
                <Stack.Screen name="Detail" component={ArticleDetailScreen}
                    options={({route}) => ({ //recibe por parametro el titulo
                        title: route.params.article.name,
                    })}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};