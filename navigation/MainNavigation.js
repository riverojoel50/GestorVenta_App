import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './tab/TabNavigator'

export default MainNavigator = () => {
    return(
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
}