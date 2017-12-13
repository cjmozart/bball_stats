import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import TeamScreen from './TeamScreen';
import MatchScreen from './MatchScreen';
import StatScreen from './StatScreen';

class MainScreen extends Component {
    render() {
        return (
            <Tabs />
        );
    }
}

const Tabs = TabNavigator({
    TeamScreen: {
        screen: TeamScreen
    },
    MatchScreen: {
        screen: MatchScreen
    },
    StatScreen:{
        screen: StatScreen
    },
});

export default MainScreen;
