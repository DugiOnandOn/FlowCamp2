import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const item = require('../../images/place/images5.jpeg')
const Adding = () => {

  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.2,}}>
        <TouchableOpacity onPress={()=>{ navigation.goBack(); }}>
          <AntDesign name="arrowleft" style={{ color:'black', fontSize: 25, paddingTop:5, }} /> 
        </TouchableOpacity>
        <Text style={{paddingLeft:141, color:'#224455',fontSize:18,}}>
          여행기 공유
        </Text>
      </View>
      <TouchableOpacity onPress={()=>{}}>
        <Image source={item} style={{ width: '100%', height: '40%'}}/>
      </TouchableOpacity>
    </View>
  )
}

export default Adding