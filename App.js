import { Button, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';

import store from './store'
import MainNavigation from './navigation/MainNavigation';

export default function App() {
  const [loaded] = useFonts({
    BitterBold: require('./assets/fonts/Bitter-Bold.ttf'),
    BitterRegular:require('./assets/fonts/Bitter-Regular.ttf')
  })

  if (!loaded) return <AppLoading/>

  // if (!loaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setFontLoaded(true)}
  //       onError = {console.warn}
  //     />
  //     )
  // }

  return (
    <Provider store={store}><MainNavigation/></Provider>
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
