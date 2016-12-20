/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Platform,
  StatusBar,
  TextInput,
  Alert,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import Styles from '../css/AppStyles';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regName:'',
      regEmail:'',
      regPass:''
    };
  }
  focusChangeField = (focusField) => {
    this.refs[focusField].focus();
  }
  componentWillMount() {
    const value = AsyncStorage.getItem('@userDetails');
    if (value !== null){
      console.log(value);
    } else {
      console.log("no");
    }
  }
  _regesterHandle = () => {
    let fullName = this.state.regName;
    let email = this.state.regEmail;
    let password = this.state.regPass;
    let userDetails = {
      name:fullName,
      email:email,
      password:password
    }

    try {
     /* const value = AsyncStorage.getItem('@userDetails');
      if (value !== null){
        let loginDetails = JSON.parse(value);
        console.log(loginDetails);
      } else {*/
        AsyncStorage.setItem('@userDetails', JSON.stringify(userDetails));
        this.props.navigator.push({name:'sign_in'})
      //}
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <View style={Styles.mainContainer}>
        <StatusBar
          translucent={false}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content"
          hidden={(Platform.OS === 'ios') ? true : false} 
        />
       {/* <View style={Styles.AppHeader}>

        </View>*/}
        <View style={[Styles.fixedView, Styles.viewAlignCenter]}>
          <Text style={Styles.headerH2}>Sign Up here</Text>
          <View>
            <TextInput 
              placeholder="FULL NAME" style={Styles.inputFieldCenter}
              keyboardType="default"
              returnKeyType="next"
              ref="signUpName"
              onChangeText = {(text) => this.setState({regName:text})}
              onSubmitEditing={() => this.focusChangeField('signUpNameEmail')}
              value={this.state.regName}
            />
            <TextInput 
              placeholder="EMAIL ID" style={Styles.inputFieldCenter}
              keyboardType="email-address"
              returnKeyType="next"
              ref="signUpNameEmail"
              onChangeText = {(text) => this.setState({regEmail:text})}
              onSubmitEditing={() => this.focusChangeField('signUpNamePassword')}
              value={this.state.regEmail}
            />
          </View>
          <View>
            <TextInput 
              placeholder="PASSWORD" style={Styles.inputFieldCenter}
              onChangeText = {(text) => this.setState({regPass:text})}
              keyboardType="default"
              ref="signUpNamePassword"
              secureTextEntry={true}
              returnKeyType="done"
              onSubmitEditing={this._regesterHandle}
              value={this.state.regPass}
            />
          </View>
          <View>
            <TouchableOpacity style={Styles.btnPrimary} onPress={this._regesterHandle} >
              <Text style={Styles.btnText}>SIGNUP</Text>
            </TouchableOpacity>
              
          </View>
        </View>
       {/* <View style={Styles.AppFooter}>

        </View>*/}
      </View>
    );
  }
}
