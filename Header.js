import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Header extends Component {
  render() {
    let {title , bg} = this.props;
    return (
        <View style={{backgroundColor:bg,flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'#fff',fontFamily:"IRANSansMobile",textAlign:'center',fontSize:20}}>
                {title}
            </Text>
        </View>
    )
  }
}