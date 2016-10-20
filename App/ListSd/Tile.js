import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { fetchFile } from '../services/AsyncService';
import getStyles from '../styles';
import RNFS from 'react-native-fs';

const styles = getStyles();

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
        console.log('FILE WRITTEN!');
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
          <Image
            style={styles.imageCloudFiles}
            source={require('./../imgs/upload-icon-3.png')}
          />
          <View style={styles.centerView}>
            <TouchableHighlight onPress={this.fetchFile.bind(this)} underlayColor={styles.white}>
              <Text style={styles.login}>Download {data.name.filename}</Text>
            </TouchableHighlight>

          </View>
        </View>
    );
  }
}
