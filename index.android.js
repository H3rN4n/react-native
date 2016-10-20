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

import NavigationBar from 'react-native-navbar';

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
        <NavigationBar style={{ flex: 1, backgroundColor: '#fff', }}
          title={{ title: 'AERYUM', }}
          leftButton={{ title: '< Back',}}
          rightButton={{ title: 'Forward >', }} />
          <App/>
    </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});




AppRegistry.registerComponent('aeyrium', () => aeyrium);
