import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import LogInScreen from './screens/LogInScreen';
import HomeScreen from './screens/HomeScreen';
import AuthloadingScreen from './screens/AuthLoadingScreen';


// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({ HomeScreen: HomeScreen });
const AuthStack = createStackNavigator({ LogInScreen: LogInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthloadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1e90ff'
      },
      headerTintColor: '#fff',
      headerTintStyle: {
        textAlign: 'center',
      }
    }
  },
));


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
