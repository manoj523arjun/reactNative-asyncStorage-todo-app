import React, { Component } from 'react';
import {
	Text,
	View,
	Navigator,
	Platform,
	Modal,
	TextInput,
	TouchableOpacity
} from 'react-native';

import Styles from '../css/AppStyles';

export default class ModalAddNote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			 noteTitle:this.props.noteTitle,
      		 noteDesc:this.props.noteDesc
		};
	}
	focusChangeField = (focusField) => {
		this.refs[focusField].focus();
	}
	render() {
		return (
			<Modal
            animationType={"slide"}
            transparent={true}
            visible={this.props.showModal}
            onRequestClose={this.props.requestClose}
            >
           <View style={{backgroundColor:'rgba(255,255,255,0.9)',flex:1,justifyContent:'center',paddingHorizontal:30,}}>
           <TextInput
           style={Styles.inputFieldCenter} 
           ref="noteTitle" 
           placeholder="Enter note title" 
           value={this.state.noteTitle}
           returnKeyType="next"
		   onSubmitEditing={() => this.focusChangeField('noteDesc')}
           onChangeText = {(text) => this.setState({noteTitle:text})} />
           <TextInput
           style={Styles.inputFieldCenter} 
           ref="noteDesc" 
           placeholder="Enter note Desc" 
           value={this.state.noteDesc}
           returnKeyType="done"
		   onSubmitEditing={this.props.addNewNote.bind(this, this.state.noteTitle, this.state.noteDesc)}
           onChangeText = {(text) => this.setState({noteDesc:text})} />
           <TouchableOpacity style={Styles.btnPrimary} onPress={this.props.addNewNote.bind(this, this.state.noteTitle, this.state.noteDesc)}>
              <Text style={Styles.btnText}>Add Note</Text>
            </TouchableOpacity>
           </View>
        </Modal>
		);
	}
}