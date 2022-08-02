import React from "react";
import {TextInput, StyleSheet} from "react-native"

export default Input =  (props) => {
    const { placeholder } = props 

    return (
        <TextInput {...props} style= {{...styles.input, ...props.style}} placeholder={placeholder}></TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 37,
        //borderBottomColor: 'grey',
        //borderBottomWidth: 1,
        borderRadius: 6,
        marginVertical: 10,
        backgroundColor: '#F4f4f6',
        paddingLeft:10
    }
})