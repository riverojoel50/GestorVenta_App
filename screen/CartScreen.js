import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CartItem from "../components/CartItem";
import { CART } from "../data/cart";

export default CartScreen = () => {
    const items = CART;
    const total = 12000;


    const handlerConfirmCart = () => {console.log('Confirmar carrito')}
    const handlerDeleteItem = () => {console.log('Eliminar demasisa')}

    const renderItem = (data) => (
        <CartItem item={data.item} onDelete={handlerDeleteItem}/>
    );

    return (
        <View>
            <Text>CARRITO</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#fff',
        paddingBottom: 120,
    },
    list: {
        flex: 1,
    },
    footer:{
        padding: 12,
        borderTopColor: '#ccc',
        borderTopwidth: 1,
    },
    confirm: {
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    total: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        fontFamily: 'OpenSansBold',
        padding: 8,
    }
})