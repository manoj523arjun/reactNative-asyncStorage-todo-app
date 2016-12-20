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
  TouchableOpacity,
  Modal,
  AsyncStorage
} from 'react-native';
import Styles from '../css/AppStyles';
import ModalAddNote from './ModalAddNote';

export default class MyList extends Component {
  constructor(props) {
    super(props);
    this.myList = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1!==r2});
    this.listItems = [
      {
        listTitle:'My list 1',
        listDesc:'My list 1 desc  djfsd fjdsfd sdf sdfjakfbdf sdfds afsdafsd fsdfusdf sdfsfu'
      },
      {
        listTitle:'My list 2',
        listDesc:'My list 2 desc'
      },
      {
        listTitle:'My list 3',
        listDesc:'My list 3 desc'
      }
    ];
    this.state = {
      dataSource: this.myList.cloneWithRows(this.listItems),
      showModal:false,
      noteTitle:'',
      noteDesc:''
    };
    
  }
  removeNote = (rowData) => {
    const rowIdVal = this.listItems.findIndex(x => x===rowData);
    this.listItems.splice(rowIdVal, 1);
    this.setState({
      dataSource: this.myList.cloneWithRows(this.listItems)
    });
    /*this.listItems.splice(rowID, 1);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.listItems)
    });*/
  }
  showList = (rowData, sectionID, rowID, highlightRow) => {
    return (
      <View style={Styles.myList}>
        <View style={Styles.fullWidth}>
          <Text style={{fontSize:18, color:'#000000',marginBottom:5,}}>{rowData.listTitle}</Text>
          <Text>{rowData.listDesc}</Text>
        </View>
        <View style={[Styles.autoWidth, Styles.vAlign]}>
          <TouchableOpacity onPress={this.removeNote.bind(this, rowData)}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  addNoteClick = () => {
    this.setState({
      showModal:true, 
      noteTitle:'', 
      noteDesc:''
    });
  }
  addNewNote = (title, desc) => {
    if(title!== '' && desc!== '') {
      this.listItems.push({
        listTitle:title,
        listDesc:desc
      });
      this.setState({
        dataSource:this.myList.cloneWithRows(this.listItems),
        showModal:false,
        noteTitle:'',
        noteDesc:''
      });
    } else {
      Alert.alert("Please fill the details");
    }
    
  }
  requestClose = () => {
    this.setState({
      showModal:false,
      noteTitle:'', 
      noteDesc:''
    });
  }
  _logoutHandle = () => {
    AsyncStorage.setItem("@userLoggedIn","false");
    this.props.navigator.push({name:'sign_in'});
  }

  render() {
    return (
       <View style={Styles.mainContainer}>
          <View style={Styles.AppHeader}>
            {/*<View style={Styles.iconView}>
              <Text style={Styles.headerText}>Menu</Text>
            </View>*/}
            <View style={Styles.titleLeft}>
              <Text style={Styles.headerText}>My List</Text>
            </View>
            <View style={Styles.iconRight}>
              <TouchableOpacity onPress={this.addNoteClick}>
                <Text style={Styles.headerText}>Add list</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.iconRight}>
              <TouchableOpacity onPress={this._logoutHandle}>
                <Text style={Styles.headerText}>logout</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex:1,}}>
          {this.listItems.length>0 ? <ListView dataSource={this.state.dataSource} renderRow={this.showList} /> : <Text>no data found</Text>}      
          </View>
           <ModalAddNote 
           showModal={this.state.showModal} 
           addNewNote = {this.addNewNote} 
           requestClose={this.requestClose}
           noteTitle={this.state.noteTitle}
           noteDesc={this.state.noteDesc} />
        </View>
    );
  }
}
