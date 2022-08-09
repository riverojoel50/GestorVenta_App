import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { Ionicons } from '@expo/vector-icons'
import {COLORS} from '../constants/colors'


const formatDay = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
}


export default OrderItem = ({item, onDelete}) => {
    return (
        <View style={styles.order}>
            <View>
                <Text style={styles.date}>{formatDay(item.date)}</Text>
                <Text style={styles.date}>${item.total}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="md-trash" color={COLORS.primary} size={22}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    order: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 6,
    },
    date: {
        fontSize: 18,
    },
    total: {
        fontSize: 18,
        fontFamily: 'OpenSansBold'
    }
})