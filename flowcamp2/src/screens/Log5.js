import { View, Text, Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const image = require('../../images/place/images10.jpeg')

const Log5 = () => {
    const navigation = useNavigation();
    
return (

    <View style={{flexDirection: 'column'}}>
      <View style={{paddingTop:130, paddingLeft:109}}>
        <Text style={{fontSize: 30, paddingLeft:45, paddingBottom:40, fontWeight:'400', color: "#224455"}}>
          Hello!
        </Text>
        <Image source={image} style={{width:180, height:180, }}/>
      </View>
      <View style={{paddingTop:70, paddingLeft: 103, paddingRight:100, paddingBottom:15}}>
        <TouchableOpacity onPress={()=>navigation.push('Log2')}>
          <View style={{
                  borderColor:'#335566',borderWidth:2,
                  borderRadius:70,
                  }}>
            <Text style={{paddingLeft:33,fontSize:17.8, color: '#335566', fontWeight:'bold', paddingBottom:7, paddingTop:5}}>
              이메일로 로그인
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{paddingTop:10, paddingLeft: 103, paddingRight:100, paddingBottom:15}}>
        <TouchableOpacity onPress={()=>navigation.push('Log4')}>
          <View style={{
                  borderColor:'#335566',borderWidth:2,
                  borderRadius:70,
                  }}>
            <Text style={{paddingLeft:33,fontSize:17.8, color: '#335566', fontWeight:'bold', paddingBottom:7, paddingTop:5}}>
              카카오로 로그인
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{paddingTop:10, paddingLeft: 103, paddingRight:100}}>
        <TouchableOpacity onPress={()=>navigation.push('Log3')}>
          <View style={{
                  borderColor:'#335566',borderWidth:2,
                  borderRadius:70,
                  }}>
            <Text style={{paddingLeft:55,fontSize:17.8, color: '#335566', fontWeight:'bold', paddingBottom:7, paddingTop:5}}>
              회원 가입
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Log5