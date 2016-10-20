import React, { Component } from 'react';
import { Navigator, View, ListView, Text, TouchableHighlight, Image, ScrollView } from 'react-native';
import getStyles from '../styles';
import { fetchFiles, fetchFile, getSSID, uploadFile } from '../services/AsyncService';
import parseSdResults from './../services/sd-card-parser';
import NavigationBar from 'react-native-navbar';

import NetworkInfo from 'react-native-network-info';
import RNFS from 'react-native-fs';

const styles = getStyles();
let sdParserInstance = new parseSdResults;

export default class App extends Component {
  constructor(props){
    super(props);

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
      this.props.navigator.push({id: 'messages', 'message': 'You must to connect with the Flashair Card Network'});
    } else {
      this.props.navigator.push({id: 'sdlist'});
    }
  }

  render() {
    let iconStatus = this.state.flashAirStatus !== 'Not Conected' ? require('./../imgs/wifi-icon-15-on.png') : require('./../imgs/wifi-icon-15.png');
    // let downloadFilesBtn = <TouchableHighlight onPress={this.fetchFile.bind(this)}> 
    //   <Text style={styles.login}>Download file</Text> 
    // </TouchableHighlight>;
    let downloadFilesBtn = <TouchableHighlight onPress={this.goToSdFiles.bind(this)}> 
      <Text style={styles.btnHome}>Download Sd Files</Text> 
    </TouchableHighlight>;

    if(this.state.flashAirStatus == 'Not Conected'){
      //downloadFilesBtn = null;
    }

    const titleConfig = {
      title: 'Aeyrium',
    };


    return (
      <ScrollView contentContainerStyle={styles.bgview}>
        <View style={styles.view}>
          <NavigationBar
            title={titleConfig}/>
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
              <TouchableHighlight onPress={this.getSSID.bind(this)}>
                <Text style={styles.btnHome}>Refresh Wifi Connection</Text>
              </TouchableHighlight>

              {downloadFilesBtn}

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
            <TouchableHighlight onPress={this.goToFileList.bind(this)}>
              <Text style={styles.login}>Upload Files</Text>
            </TouchableHighlight>
          </View>
        </View>
        
        </View>
      </ScrollView>
    );
  }
}