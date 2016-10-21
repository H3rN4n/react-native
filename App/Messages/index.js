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

    const leftButtonConfig = {
      title: 'Back',
      handler: () => this.goHome(),
    };

    const titleConfig = {
      title: 'Aeyrium',
    };


    return (
      // <View style={styles.view}>
      //   <ScrollView contentContainerStyle={styles.bgview}>
      //     <View style={styles.view}>
      //       <NavigationBar
      //       title={titleConfig}
      //       leftButton={leftButtonConfig}/>
      //       <Text style={styles.message}>{this.props.type}</Text>
      //     </View>
      //   </ScrollView>
      // </View>
      <View style={styles.view}>
        <ScrollView contentContainerStyle={styles.bgview}>
          <View style={styles.view}>  
            <NavigationBar style={styles.navigationBar}
              title={{ title: 'AERYUM', tintColor: '#3399db', style: styles.navigationBarTitle  }}
              leftButton={{ title: '  < BACK', handler: () => this.goHome(), }}
              />
            <Text style={styles.message}>{this.props.type}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
