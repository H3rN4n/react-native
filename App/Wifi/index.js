import React, { Component } from 'react';
import { Navigator, View, ListView, Text, TouchableHighlight, Image, ScrollView } from 'react-native';
import getStyles from '../styles';
import { fetchFiles, fetchFile, getSSID, uploadFile } from '../services/AsyncService';
import parseSdResults from './../services/sd-card-parser';

import NetworkInfo from 'react-native-network-info';
import RNFS from 'react-native-fs';

import NavigationBar from 'react-native-navbar';

const styles = getStyles();
let sdParserInstance = new parseSdResults;

export default class App extends Component {
  constructor(props){
    super(props);
    console.log("constructor app component");
    console.log(RNFS.DocumentDirectoryPath);
    
    this.state = {
      status: '',
      files: [],
      'flashAirStatus': 'Not Conected',
      //'flashAirStatus': 'Conected',
      'flashairSSID': null,
      'uploading': false,
      'filename': null
    };

    // Get SSID
    NetworkInfo.getSSID(ssid => {
      console.log(ssid);
    });

    // Get Local IP
    NetworkInfo.getIPAddress(ip => {
      console.log(ip);
      if(ip != 'error'){
        this.setState(Object.assign({}, this.state, {status: 'Conected ' + ip}));
      } else {
        this.setState(Object.assign({}, this.state, {status: 'Not Conected'}));
      }
    });
  
  }

  componentDidMount(){
    this.getSSID();
  }

  getSSID(){
    getSSID().then((data)=>{
      console.log(data);
      this.setState(Object.assign({}, this.state, {flashairSSID: data}));
      if(data){
        this.setState(Object.assign({}, this.state, {flashAirStatus: 'Conected'}));
      } else {
        this.setState(Object.assign({}, this.state, {flashAirStatus: 'Not Conected'}));
      }
    });
  }

  goToFileList(){
    if(this.state.flashAirStatus != "Conected"){
      this.props.navigator.push({id: 'list'});
    } else {
      this.props.navigator.push({id: 'messages', 'message': 'You need internet connection to upload data to the Aeyrium service'});
    }
  }

  goToSdFiles(){
    if(this.state.flashAirStatus != "Conected"){
      this.props.navigator.push({id: 'messages', 'message': 'You need to be connected to the Flashair Card Network'});
    } else {
      this.props.navigator.push({id: 'sdlist'});
    }
  }

  render() {
    let iconStatus = this.state.flashAirStatus !== 'Not Conected' ? require('./../imgs/wifi-icon-15-on.png') : require('./../imgs/wifi-icon-15.png');
    // let downloadFilesBtn = <TouchableHighlight onPress={this.fetchFile.bind(this)}> 
    //   <Text style={styles.login}>Download file</Text> 
    // </TouchableHighlight>;

    if(this.state.flashAirStatus == 'Not Conected'){
      //downloadFilesBtn = null;
    }

    return (
      <ScrollView contentContainerStyle={styles.bgview}>
        <View style={styles.view} >
          <NavigationBar style={styles.navigationBar} 
          title={{ title: 'AERYUM', tintColor: '#3399db', style: styles.navigationBarTitle }}
          />
          <View style={styles.viewrow}>
            <View style={styles.imageContainerWhite}>
              <Image
                  style={styles.imageWifi}
                  source={iconStatus}
                />
            </View>
            <View style={styles.view}>
              <Text style={styles.message}>Flashair: {this.state.flashAirStatus}</Text>
            </View>
          </View>
          <View style={styles.view}>
            <View style={styles.viewContainer}>
              <TouchableHighlight onPress={this.getSSID.bind(this)} underlayColor={styles.transparent} style={styles.TouchableHighlight}>
                <Text style={styles.button}>Refresh Wifi Connection</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={this.goToSdFiles.bind(this)} underlayColor={styles.white} style={styles.TouchableHighlight}> 
                <Text style={styles.button}>Download Sd Files</Text> 
              </TouchableHighlight>

            </View>
          </View>
        
        <View style={styles.viewrow}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageCloud}
              source={require('./../imgs/upload-icon-3.png')}
            />
          </View>
          <View style={styles.centerView}>
            <TouchableHighlight onPress={this.goToFileList.bind(this)} underlayColor={styles.white} style={styles.TouchableHighlight}>
              <Text style={styles.button}>Upload Files</Text>
            </TouchableHighlight>
          </View>
        </View>
        
        </View>
      </ScrollView>
    );
  }
}