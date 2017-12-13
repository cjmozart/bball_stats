import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from "react-native";

class LoginScreen extends Component{
    render(){
        return (
            <View>
                <Text>Login</Text>
                <Button 
                    onPress={() => this.props.navigation.navigate['MatchScreen'])} 
                    title="Go to MatchScreen" />
            </View>
        );
    }
}

export default LoginScreen;