import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import { Icon } from 'native-base';

import MainScreen from 'pages/MainScreen';
import SaleScreen from 'pages/SaleScreen';
import HandlingScreen from 'pages/HandlingScreen';
import PlantingScreen from 'pages/PlantingScreen';
import ProfileScreen from 'pages/ProfileScreen';

const Routes = createStackNavigator({
  MainScreen: {
    screen: createBottomTabNavigator({
      MainTab: {
        screen: MainScreen,
        navigationOptions: () => ({
          tabBarIcon: () => <Icon name="md-home" />,
        }),
      },
      ProfileTab: {
        screen: ProfileScreen,
        navigationOptions: () => ({
          tabBarIcon: () => <Icon name="md-settings" />,
        }),
      },
    }, {
      // TabNavigator
      tabBarOptions: { showLabel: false },
    }),

    // StackNavigator
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#000",
        textAlign: 'center',
      },
      headerTintColor: '#FFF',
      titleStyle: {
        color: '#fff',
        fontWeight: '300',
        textAlign: 'center',
      },
      headerTitle: 'Coopervenda',
    }),
  },
  PlantingScreen: {
    screen: PlantingScreen,

    // StackNavigator
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor : "#000",
        textAlign: 'center',
      },
      headerTintColor: '#FFF',
      titleStyle: {
        color: '#fff',
        fontWeight: '300',
        textAlign: 'center',
      },
      headerTitle: 'Plantio',
    }),
  },
  SaleScreen: {
    screen: SaleScreen,
    // StackNavigator
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor : "#000",
        textAlign: 'center',
      },
      headerTintColor: '#FFF',
      titleStyle: {
        color: '#fff',
        fontWeight: '300',
        textAlign: 'center',
      },
      headerTitle: 'Venda',
    }),
  },
  HandlingScreen: {
    screen: HandlingScreen,
    // StackNavigator
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor : "#000",
        textAlign: 'center',
      },
      headerTintColor: '#FFF',
      titleStyle: {
        color: '#fff',
        fontWeight: '300',
        textAlign: 'center',
      },
      headerTitle: 'Manejo',
    }),
  },
}, {
  headerBackTitleVisible: false,
});

export default createAppContainer(Routes);
