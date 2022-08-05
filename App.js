import { Button, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Input from './components/Input';
import ShopNavigator from './navigation/ShopNavigator';

export default function App() {
  const [loaded] = useFonts({
    BitterBold: require('./assets/fonts/Bitter-Bold.ttf'),
    BitterRegular:require('./assets/fonts/Bitter-Regular.ttf')
  })

  if (!loaded) return <AppLoading/>
  return (
     <ShopNavigator/>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E6E6E9',
//     alignItems: 'center',
//     //justifyContent: 'center',
//   },
//   input:{
//     width: '90%',
//   },
//   inputContainer:{
//     width:'100%',
//     //maxWidth:'80%',  investigar como se usa
//     padding: 20,
//     alignItems:"center",
//   },
//   button:{
//     width: "90%"
//   }
// });
