import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { uploadFile } from '../services/AsyncService';
import getStyles from '../styles';
import RNFS from 'react-native-fs';

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
        console.log('FILE DELETED');
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
          <Image
            style={styles.imageCloudFiles}
            source={require('./../imgs/upload-icon-3.png')}
          />
          <View style={styles.centerView}>
            <TouchableHighlight onPress={this.uploadFile.bind(this)} underlayColor={styles.white}>
              <Text style={styles.login}>Upload {data.name}</Text>
            </TouchableHighlight>
            
          </View>
        </View>
    );
  }
}
