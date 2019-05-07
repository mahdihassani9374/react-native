import React, { Component } from 'react'
import { Text, View , TextInput ,Button} from 'react-native'

export default class Body extends Component {
    state = {
        name : 'مهدی حسنی '
    }
    message=()=> {
        alert(`سلام بر ${this.state.name}`)
    }
    render() {
        return (
            <View style={{backgroundColor:'#fff',flex:10,alignItems:"center",justifyContent:'center',padding:20}}>
                <Text style={{color:'#7B1FA2',fontFamily:"IRANSansMobile",textAlign:'center',marginTop:15}}>برای ورود به اپلیکیشن باید عضو باشد </Text>
                <TextInput placeholder="نام کاربری " style={{color:'#fff',fontFamily:"IRANSansMobile",textAlign:'right',width:'100%',marginTop:15}} />
                <TextInput placeholder="رمز عبور " style={{color:'#fff',fontFamily:"IRANSansMobile",textAlign:'right',width:'100%',marginTop:15}} />
                <View style={{marginTop:25,width:'100%'}}>
                    <Button style={{width:'100%',height:30}} title="ورود" color="#E91E63" onPress={this.message} />
                </View>
            </View>
        )
    }
}