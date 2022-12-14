import React from "react";
import {View, Text, TouchableOpacity, StyleSheet } from "react-native";



export default GridItem = ({item, onSelected}) => {
    return (
        <View style={styles.GridItem}>
            <TouchableOpacity  style={{...styles.container, backgroundColor: item.color}} onPress={()=>{onSelected(item)}}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>       
        </View>

    )
}

const styles = StyleSheet.create({
    GridItem:{
        flex: 1,
        borderRadius: 6,
        margin: 15,
        height: 150
    },
    container:{
        flex: 1,
        borderRadius: 6,
        shadowColor: 'balck',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 8
    },
    title: {
        fontFamily: 'BitterBold'
    }
})