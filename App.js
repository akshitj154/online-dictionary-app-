import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreens'

export default class App extends React.Component {
  render(){
  return (
    <View>
      
      <HomeScreen />
    
    </View>
 
  );
}
}


