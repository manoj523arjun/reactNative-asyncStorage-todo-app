import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';


const Styles = StyleSheet.create({
  mainContainer: {
    justifyContent:'space-between',
    flex:1,
  },
  headerH2: {
    fontSize:24,
    color:'#000000', 
    textAlign:'left',
  },
  AppHeader: {
    height:56,
    backgroundColor:'#e03c00',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10
  },
  iconView: {
    flex:0,
  },
  headerText: {
    fontSize:20,
    color:'#ffffff',
  },
  iconRight: {
    flex:0,
    padding:10,
  },
  AppFooter: {
    height:56,
  },
  titleLeft: {
    flex:1,
    paddingHorizontal:10
  },
  fixedView: {
    flex:1,
    backgroundColor:'#ddd',
    padding:50,
  },
  viewAlignCenter: {
    justifyContent:'center',
  },
  inputFieldCenter: {
    textAlign:'center',
    fontSize:16,
  },
  btnView: {
    marginTop:20,
  },
  btnPrimary: {
    height:48,
    backgroundColor:'#e03c00',
    justifyContent:'center', 
    alignItems:'center',
    marginTop:15,
  },
  btnText: {
    color:'#ffffff', 
    fontSize:18,
  },
  btnPrimaryOutline:  {
    backgroundColor:'transparent',
  },
  textPrimary: {
    color:'#e03c00',
    fontSize:18,
  },
  myList: {
    flex:1, 
    padding:10, 
    borderWidth: StyleSheet.hairlineWidth, 
    borderColor: '#ddd',
    flexDirection:'row'
  },
  fullWidth: {
    flex:1,
  },
  autoWidth: {
    flex:0,
    paddingHorizontal:10
  },
  vAlign: {
    justifyContent:'center'
  },
});

module.exports = Styles;