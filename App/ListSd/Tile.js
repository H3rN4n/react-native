import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, Alert } from 'react-native';
import { fetchFile } from '../services/AsyncService';
import getStyles from '../styles';
import RNFS from 'react-native-fs';

const styles = getStyles();

import getImages from '.././images';
const images = getImages();

export default class Tile extends Component {
  constructor(props){
    super(props);
  }

  fetchFile(){
    let fileName = this.props.data.name.filename;

    fetchFile(fileName).then((data)=>{
      let file = data;
      console.log(file);
      this.writeFile(file, fileName);
    });
  }

  writeFile(data, filename){
    // create a path you want to write to
    var path = RNFS.DocumentDirectoryPath + '/' + filename;
    // write the file
    RNFS.writeFile(path, data, 'utf8')
      .then((success) => {
        Alert.alert( filename + 'was downloaded!');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    const data = this.props.data;

    console.log(data);

    return (

      
      
      <View style={styles.viewrow}>
          <View style={styles.centerView}>
            <TouchableHighlight onPress={this.fetchFile.bind(this)}>
              <Text style={styles.login}>Download {data.name.filename}</Text>
            </TouchableHighlight>

          </View>
        </View>
    );
  }
}
