/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Linking
} from 'react-native'

const App= ()  => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Ananya</Text>
      <TouchableOpacity style={{ 
                width:150,
                borderWidth:2,
                borderColor:'white',
                backgroundColor:'white',
                borderRadius:30,
                justifyContent: 'center', 
                alignItems:'center',
                margin:10
                }}
                onPress={()=>{Linking.openURL('https://www.youtube.com/c/ProgrammingwithMash')}}><Text style={{color:'#000000'}}>View Youtube profile</Text></TouchableOpacity>
    </View>
   
  );
 };

const styles = StyleSheet.create({
 body:{
  flex:1,
  backgroundColor:'pink',
  alignItems:'center',
  justifyContent:'center'
 },
 text:{
  color:'#ffff',
  fontSize:25,
  fontStyle:'italic'
 },
 button:{
  width:150,
                borderColor:'red',
                borderRadius:30,
                justifyContent: 'center', 
                alignItems:'center'
 }

});

export default App;
