import { View, Text, Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const image = require('../../images/place/images10.jpeg')

const Log5 = () => {
    const navigation = useNavigation();
    
return (

    <View style={{flexDirection: 'column'}}>
      <View style={{position:'relative',paddingTop:'30%', paddingLeft:'28%'}}>
        <Text style={{fontSize: 30, paddingLeft:'15%', paddingBottom:'17%', fontWeight:'400', color: "#224455"}}>
          Hello!
        </Text>
        <Image source={image} style={{width:180, height:180,}}/>
      </View>
      <View style={{position:'reltive',paddingTop:'15%', paddingLeft: '26%', paddingRight:'25%', paddingBottom:'5%'}}>
        <TouchableOpacity onPress={()=>navigation.push('Log2')}>
          <View style={{
                  borderColor:'#335566',borderWidth:2,
                  borderRadius:70,
                  }}>
            <Text style={{paddingLeft:'17%',fontSize:17.8, color: '#335566', fontWeight:'bold', paddingBottom:'4%', paddingTop:'3%'}}>
              이메일로 로그인
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{position:'relative',paddingTop:'3%', paddingLeft: '26%', paddingRight:'25%', paddingBottom:'5%'}}>
        <TouchableOpacity onPress={()=>navigation.push('Log4')}>
          <View style={{
                  borderColor:'#335566',borderWidth:2,
                  borderRadius:70,
                  }}>
            <Text style={{paddingLeft:'17%',fontSize:17.8, color: '#335566', fontWeight:'bold', paddingBottom:'4%', paddingTop:'3%'}}>
              카카오로 로그인
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{position:'relative', paddingTop:'3%', paddingLeft: '26%', paddingRight:'25%'}}>
        <TouchableOpacity onPress={()=>navigation.push('Log3')}>
          <View style={{
                  borderColor:'#335566',borderWidth:2,
                  borderRadius:70,
                  }}>
            <Text style={{paddingLeft:'30%',fontSize:17.8, color: '#335566', fontWeight:'bold', paddingBottom:'4%', paddingTop:'3%'}}>
              회원 가입
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Log5