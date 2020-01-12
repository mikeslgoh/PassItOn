import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './LoginScreen.styles';

import * as userData from "../data/ExampleUserData";

/**
 * Future:
 * add this information to the Google Cloud database
 * find a way to do some authentication
 */
export default class LoginScreen extends React.Component {
    state = {
        username: "",
        password: "",
        nameVal: '',
        passwordVal: '',
        errorMessage: "",
    };

    validateEmailAndPassword() {
        let users = userData.Users;

        for (let i = 0; i < users.length; i++)
        {
            if (this.state.username === users.Email &&
                this.state.password === users.Password) {
                this.props.navigation.navigate('Home');
            }
        }
        this.setState({errorMessage: 'Username or password is incorrect'});
    }

    render() {
        return(
            <View>
                <Text style={styles.titleStyle}>Pass It On</Text>
                <TextInput
                    style={styles.inputBox}
                    OnSubmitEditing={text => {
                        console.log(text);
                        this.setState({username: text})
                        }}
                    placeholder='Email'
                />
                <TextInput
                    style={styles.inputBox}
                    onChangeText={text => {
                        console.log(this.state.password);
                        this.state.password = text;
                        this.setState({passwordVal: text});
                    }}
                    value={this.state.passwordVal}
                    secureTextEntry={true}
                    placeholder='Password'
                />
                <Text style={styles.errorTextStyle}>{this.state.errorMessage}</Text>
                <TouchableOpacity
                    style={styles.roundButton}
                    onPress={this.validateEmailAndPassword}>
                    <Text style={styles.buttonTextStyle}>Sign In</Text>
                </TouchableOpacity>
            </View>
        )
    }
}