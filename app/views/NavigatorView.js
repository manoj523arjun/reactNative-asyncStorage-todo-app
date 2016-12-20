import React, { Component } from 'react';
import {
	Text,
	View,
	Navigator,
	Platform,
	AsyncStorage
} from 'react-native';

import SignIn from './SignIn';
import SignUp from './SignUp';
import MyList from './MyList';

export default class NavigatorView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			initialComponent:''
		}
	}
	componentWillMount() {
		AsyncStorage.getItem("@userLoggedIn").then((status)=> {
			console.log(status);
			if(status=="true") {
				this.setState({
					initialComponent:'my_list'
				});
				this.refs['MainNavigator'].push({name:this.state.initialComponent});
				console.log(this.state.initialComponent);
			} else {
				this.setState({
					initialComponent:'sign_in'
				});
				this.refs['MainNavigator'].push({name:this.state.initialComponent});
			}
		}).done();
	}
	_renderScene(route, navigator) {
		console.log("Navigating to route: " + route);
		switch(route.name) {
			case "sign_in":
				return (
					<SignIn navigator={navigator} nextComponent="sign_up" />
				);
			break;
			case "sign_up":
				return (
					<SignUp navigator={navigator} nextComponent="sign_up" />
				);
			break;
			case "my_list":
				return (
					<MyList navigator={navigator} nextComponent="sign_up" />
				);
			break;
		}
	}
	_configureScene() {
		if(Platform.OS === 'ios')
  			return {...Navigator.SceneConfigs.PushFromRight, gestures: false};
  		else
			return {...Navigator.SceneConfigs.FloatFromBottomAndroid, gestures: false};
	}
	render() {
		return (
			<Navigator initialRoute={{name: this.state.initialComponent}}
			   renderScene={this._renderScene.bind(this)}
			   ref="MainNavigator"
			   configureScene={this._configureScene} 
			/>
		);
	}
}