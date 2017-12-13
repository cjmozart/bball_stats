import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'; 
import LoginScreen from './src/screens/LoginScreen';
import MatchScreen from './src/screens/MatchScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = StackNavigator({
  LoginScreen: { screen: LoginScreen},
  MatchScreen: {screen: MatchScreen}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
