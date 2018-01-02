import React from 'react';
/*import { StyleSheet, Text, View } from 'react-native';*/
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <AppNavigator />
      </Provider>
    );
  }
}

// Mulige screens:
const AppNavigator = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  MainScreen: { screen: MainScreen },
  },
  { headerMode: 'none',
    initialRouteName: 'LoginScreen' });
/*
const ActionForLoginScreen = AppNavigator.router.getActionForPathAndParams(
  'LoginScreen'
);
*/

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
