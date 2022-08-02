import React from "react";
import { Button, StyleSheet, View } from 'react-native';
import Input from "../components/Input";


export default LoginScreen = ({navigation}) => {
    return(
        // <View style={styles.inputContainer}>
        //     <Input style={styles.input} placeholder='E-mail'/>
        //     <Input style={styles.input} placeholder='PassWord'/>

        //     <Button style={styles.button} color="#777DA7" title='Log in'/>
        // </View>

        <View style={styles.container}>
            {/* <Header title='login'/> */}
            <View style={styles.inputContainer}>
                <Input style={styles.input} placeholder='E-mail'/>
                <Input style={styles.input} placeholder='PassWord'/>

                <Button style={styles.button} color="#8F98DF" title='Log in' onPress={() => {
                  navigation.navigate('Home')
                }}/>
            </View>
        </View>
    )
}


// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
//   });

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E6E6E9',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    input:{
      width: '90%',
    },
    inputContainer:{
      width:'100%',
      //maxWidth:'80%',  investigar como se usa
      padding: 20,
      alignItems:"center",
    },
    button:{
      width: "90%"
    }
  });