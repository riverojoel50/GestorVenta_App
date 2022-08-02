import React from "react";
import { Button, StyleSheet, View,Text } from 'react-native';
import Input from "../components/Input";


export default Home = () => {
    return(
        <View style={styles.container}>
            <Text>{"Listado de articulos"}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E6E6E9',
      alignItems: 'center',
    },
    input:{
      width: '90%',
    },
    inputContainer:{
      width:'100%',
      padding: 20,
      alignItems:"center",
    },
    button:{
      width: "90%"
    }
  });