import React, { Component } from 'react';
import { Navigator, View, ListView, TouchableHighlight, Text, ScrollView } from 'react-native';
import getStyles from '../styles';
import RNFS from 'react-native-fs';

import NavigationBar from 'react-native-navbar';

const styles = getStyles();

export default class App extends Component {
  constructor(props){
    super(props);  
  }
  
  goHome(){
    this.props.navigator.push({id: 'wifi'});
  }

  render() {

    return (
      <View style={styles.view}>
        <NavigationBar style={styles.navigationBar}
          title={{ title: 'AERYUM', tintColor: '#3399db', style: styles.navigationBarTitle  }}
          leftButton={{ title: '  < BACK', handler: () => this.goHome(), }}
          />
        <ScrollView contentContainerStyle={styles.bgview}>
          <View style={styles.view}>

            <Text style={styles.message}>{this.props.type}</Text>

          </View>
        </ScrollView>
      </View>
    );
  }
}
