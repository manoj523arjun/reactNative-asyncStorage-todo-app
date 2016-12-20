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
  TouchableOpacity
} from 'react-native';
import Styles from './css/AppStyles';
import NavigatorView from './views/NavigatorView';

export default class Main extends Component {
  render() {
    return (
      <NavigatorView />
    );
  }
}
