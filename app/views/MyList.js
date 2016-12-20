import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Platform,
  StatusBar,
  TextInput,
  Alert,
  ListView,
  TouchableOpacity
} from 'react-native';
import Styles from '../css/AppStyles';
import ListItems from './ListItems';

export default class MyList extends Component {
  render() {
    return (
        <ListItems navigator={this.props.navigator} />
    );
  }
}
