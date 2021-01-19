import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupLoginScreen from './screens/SignupLoginScreen';
import {createBottomTabNavigator, r} from 'react-navigation-tabs'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import ExchangeScreen from "./screens/ExchangeScreen.js"
import HomeScreen from "./screens/HomeScreen.js"
export default class App extends React.Components {
  render() {
    return (
      <View>
    <SignupLoginScreen/>
  </View>
    );
  }
}
const tabNavigator = createBottomTabNavigator({
  ExchangeScreen : {screen: ExchangeScreen},
  HomeScreen : {screen: HomeScreen},
  })
  const switchNavigator = createSwitchNavigator({
    SignupLoginScreen: {screen: SignupLoginScreen},
     tabNavigator: {screen: tabNavigator}
  
  })
  const AppContainer = createAppContainer(switchNavigator)
  