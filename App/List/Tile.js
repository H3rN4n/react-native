import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, Alert } from 'react-native';
import { uploadFile } from '../services/AsyncService';
import getStyles from '../styles';
import RNFS from 'react-native-fs';

import getImages from '.././images';
const images = getImages();

const styles = getStyles();

export default class Tile extends Component {
  constructor(props){
    super(props);
    this.state = {
      'uploading': false
    };
  }

  uploadFile(){
    let file = null;
    let name = this.props.data.name;
    let path = RNFS.DocumentDirectoryPath + '/' + this.props.data.name;
    this.setState(Object.assign({}, this.state, {uploading: true}));
     
    RNFS.readFile(path)
    .then((data) => {
      file = data;
      uploadFile(file, this.props.data.name)
      .then((data)=>{
        this.setState(Object.assign({}, this.state, {uploading: false}));
        this.deleteFile(this.props.data.name);
      });   
    })
    .catch(function(err){
      console.log(err);
    });    
  }

  deleteFile(filename){
    console.log(filename);
    var path = RNFS.DocumentDirectoryPath + '/' + filename;

    RNFS.unlink(path)
      .then(() => {
        Alert.alert(filename + ' was uploaded and deleted from your device');
        this.props.navigator.push({id: 'wifi'});
      })
      // `unlink` will throw an error, if the item to unlink does not exist
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    const data = this.props.data;

    return (
      <View style={styles.viewrow}>
          <View style={styles.centerView}>
            <TouchableHighlight onPress={this.uploadFile.bind(this)}>
              <Text style={styles.login}>Upload {data.name}</Text>
            </TouchableHighlight>
            
          </View>
        </View>
    );
  }
}
