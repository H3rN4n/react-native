/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import App from './App';


class aeyrium extends Component {
  render() {
    return (
      

      <Navigator
        initialRoute={{ title: 'Awesome Scene', index: 0 }}
        renderScene={this.renderScene}
        style={{padding: 0}}
      />

    );
  }

  renderScene() {
    console.log("renderScene call , before return")
    return (
      <View style={{ flex: 1, backgroundColor: '#ff9900', }}>
          <App/>
      </View>
      
    )
  }
}






AppRegistry.registerComponent('aeyrium', () => aeyrium);
