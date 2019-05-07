import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Footer extends Component {
  render() {
    return (
        <View style={{flex:1,flexDirection:'row-reverse'}}>
            <View style={{flex:1,backgroundColor:'#388E3C',alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'#fff',fontFamily:"IRANSansMobile",textAlign:'center'}}>ثبت نام</Text>
            </View>
            <View style={{flex:1,backgroundColor:'#6A1B9A',alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'#fff',fontFamily:"IRANSansMobile",textAlign:'center'}}>فراموشی رمز عبور </Text>
            </View>
        </View>
    )
  }
}