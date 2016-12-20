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

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail:'',
      userPass:''
    };
  }
  componentWillMount() {
      AsyncStorage.getItem('@userDetails').then((value)=> {
        console.log(JSON.parse(value));
      }).done();
  }
  focusChangeField = (focusField) => {
    this.refs[focusField].focus();
  }
  _loginHandle = () => {
    AsyncStorage.getItem('@userDetails').then((value)=> {
        let loginUserDetails = JSON.parse(value);
        if(loginUserDetails.email==this.state.userEmail && loginUserDetails.password==this.state.userPass) {
          this.props.navigator.push({name:'my_list'});
          AsyncStorage.setItem("@userLoggedIn","true");
        } else {
          Alert.alert("error logged in");
        }
    }).done();
    
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
          <Text style={Styles.headerH2}>Sign In to add notes</Text>
          <View>
            <TextInput 
              placeholder="EMAIL ID" style={Styles.inputFieldCenter}
              keyboardType="email-address"
              returnKeyType="next"
              ref="loginEmail"
              onChangeText = {(text) => this.setState({userEmail:text})}
              onSubmitEditing={() => this.focusChangeField('loginPassword')}
              value={this.state.userEmail}
            />
          </View>
          <View>
            <TextInput 
              placeholder="PASSWORD" style={Styles.inputFieldCenter}
              onChangeText = {(text) => this.setState({userPass:text})}
              keyboardType="default"
              ref="loginPassword"
              secureTextEntry={true}
              onSubmitEditing={this._loginHandle}
              value={this.state.userPass}
            />
          </View>
          <View style={Styles.btnView}>
            <TouchableOpacity onPress={this._loginHandle} style={Styles.btnPrimary} >
              <Text style={Styles.btnText}>LOGIN</Text>
            </TouchableOpacity>
              
            <TouchableOpacity onPress={()=>this.props.navigator.push({name:'sign_up'})} style={[Styles.btnPrimary, Styles.btnPrimaryOutline]} >
              <Text style={Styles.textPrimary}>New user? signup here</Text>
            </TouchableOpacity>
            
          </View>
        </View>
       {/* <View style={Styles.AppFooter}>

        </View>*/}
      </View>
    );
  }
}
