import React, { Component } from 'react';
import { Navigator } from 'react-native';
import Wifi from './Wifi';
import List from './List';
import ListSd from './ListSd';
import Messages from './Messages';
//import ReactNativeAutoUpdater from 'react-native-auto-updater';


export default class App extends Component {
  constructor(props){
    super(props);
    //ReactNativeAutoUpdater.jsCodeVersion();
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'wifi':
        return (<Wifi navigator={navigator} />);
      case 'messages':
        return (<Messages navigator={navigator} type={route.message} />);
      case 'list':
        return (<List navigator={navigator}/>);
      case 'sdlist':
        return (<ListSd navigator={navigator}/>);
    }
  }

  render() {
    return (
    
      <Navigator
        initialRoute={{id: 'wifi'}}
        renderScene={this.navigatorRenderScene}/>
    );
  }
}
