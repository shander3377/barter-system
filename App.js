import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/SignupLoginScreen';

export default class App extends React.Components {
  render() {
    return (
      <View>
    <WelcomeScreen/>
  </View>
    );
  }
}