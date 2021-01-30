import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupLoginScreen from './screens/SignupLoginScreen';
import {createBottomTabNavigator, r} from 'react-navigation-tabs'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import ExchangeScreen from "./screens/ExchangeScreen.js"
import HomeScreen from "./screens/HomeScreen.js"
import {createDrawerNavigator} from 'react-navigation-drawer';
import {SettingsScreen} from "../screens/SettingsScreen.js"
import CustomSideBarMenu  from './CustomSideBarMenu';
export default class App extends React.Components {
  render() {
    return (
      <View>
    <AppContainer/>
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
     tabNavigator: {screen: tabNavigator},
  drawerNavigator: {screen: sideNavigator}
  })
  const sideNavigator = createDrawerNavigator({
    Home : {
      screen : tabNavigator
      },
      Setting:{
        screen: SettingsScreen
      }
    },
    {
      contentComponent:CustomSideBarMenu
    },
    {
      initialRouteName : 'Home'
    })
  const AppContainer = createAppContainer(switchNavigator)
  