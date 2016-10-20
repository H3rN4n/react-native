import React, { Component } from 'react';
import { Navigator, View, ListView, TouchableHighlight, Text, ScrollView } from 'react-native';
import Tile from './Tile';
import getStyles from '../styles';
import RNFS from 'react-native-fs';
import NavigationBar from 'react-native-navbar';

const styles = getStyles();

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {files: [], 'filename': null};  
  }
  
  goHome(){
    this.props.navigator.push({id: 'wifi'});
  }

  readDir(){
    // create a path you want to write to
    var path = RNFS.DocumentDirectoryPath + '/';
    // write the file
    RNFS.readDir(path)
      .then((files) => {
        this.setState(Object.assign({}, this.state, {files}));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }


  componentDidUpdate(prevProps, prevState){
      // 
      //console.log(prevProps, prevState);
  }

  componentDidMount(){
    this.readDir();
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(this.state.files);

    return (
      <View style={styles.view}> 
        <ScrollView contentContainerStyle={styles.bgview}>
          <View style={styles.view}>
            <NavigationBar style={styles.navigationBar}
            title={{ title: 'AERYUM', tintColor: '#3399db', style: styles.navigationBarTitle  }}
            leftButton={{  title: '  < BACK', handler: () => this.goHome(),  }}
            />
            <ListView
              enableEmptySections={true}
              dataSource={dataSource}
              renderRow={(rowData)=>
                  <Tile style={styles.updateFileName} navigator={this.props.navigator} data={rowData}></Tile>
              }
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
