import React, { Component } from 'react';
import { Text, View , Button  , Image , StatusBar} from 'react-native';
import styles from './styles'
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

export default class App extends Component {  
  render() {
    return (     
      <View style={{flex:1}}>      
          <Header title="ورود به اپلیکیشن همراه من ۱۱"  bg="#E91E63"/>
          <Body />
          <Footer />          
      </View>
    );
  }
}

