import React, { Component  } from 'react'
import { Text, View , TextInput ,Button , RefreshControl , ScrollView , AsyncStorage} from 'react-native'

export default class Body extends Component {
    state = {
        name : 'مهدی حسنی ',
        entries:[],
        loading:true,
        refreshing:false
    }

    _onRefresh=()=>{
        this.setState({
            refreshing:true,
            entries:[]
        })
        this.fetchData()
    }

    componentDidMount() { 
      AsyncStorage.getItem('session').then((value)=>{
          if(value==null) {
            this.fetchData();
          }
          else {
            this.setState({
                entries: JSON.parse(value)
            })
          }
          console.log('session',value)
      })  
    }
    
    fetchData =()=>{
        this.setState({
            entries: []
        })
        fetch('http://api.ferdows110.ir/api/session?count=9').then((response) => response.json())
        .then((responseJson) => {           
            this.setState({
                entries: responseJson,
                loading:false,
                refreshing:false
            })
            AsyncStorage.setItem('session',JSON.stringify(this.state.entries))
        })        
    }
    
    render() {
        return (
            <View style={{backgroundColor:'#fff',flex:10}}>
                <ScrollView  refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh}
                />
              }>
                {
                    this.state.entries.map((item,index)=>
                        <Text key={index} style={{padding: 10,marginTop: 3,backgroundColor: '#d9f9b1',alignItems: 'center',}}>
                            {item.occasion.title}
                        </Text>
                    )
                }
              
            </ScrollView>
            </View>
        )
    }
}