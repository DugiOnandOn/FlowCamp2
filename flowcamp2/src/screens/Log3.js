import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Log3 = ({navigation}) => {

  return (
      <SafeAreaView>
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 10,
                paddingBottom: 10,
                backgroundColor: 'white',
                borderBottomColor: 'gray',
                borderBottomWidth: 0.2,}}>
                <TouchableOpacity
                    onPress={()=>{
                    navigation.goBack();
                }}>
                    <AntDesign name="arrowleft" style={{ color:'black', fontSize: 25, paddingTop:5, }} /> 
                </TouchableOpacity>
            </View>
            <View style={{paddingTop: 60, backgroundColor: 'white', paddingBottom:30}}>
              <View style={{paddingLeft:70}}>
                <Text style={{fontSize:18, color: '#113344', fontWeight:'bold',paddingBottom:30}}>
                  이메일 주소
                </Text>
              </View>
              <View style={{paddingLeft:40}}>
                <TextInput placeholder='abc@gmail.com' placeholderTextColor="#909090"
                  style={{
                  width: "89%",
                  backgroundColor: '#EBEBEB',
                  borderRadius: 6,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 15,
                  padding: 4,
                  paddingLeft: 30,
            }}/>
              </View>
            <View style={{paddingTop: 50}}>
              <View style={{paddingLeft:80}}>
                <Text style={{fontSize:18, color: '#113344', fontWeight:'bold',paddingBottom:30}}>
                  비밀번호
                </Text>
              </View>
              <View style={{paddingLeft:40}}>
                <TextInput placeholder='비밀번호 입력' placeholderTextColor="#909090"
                  style={{
                  width: "89%",
                  backgroundColor: '#EBEBEB',
                  borderRadius: 6,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 15,
                  padding: 4,
                  paddingLeft: 35,
            }}/>
              </View>
          </View>
        </View>
        <View style={{paddingTop:22,backgroundColor:'white'}}>
          <View style={{paddingLeft:95}}>
                <Text style={{fontSize:18, color: '#113344', fontWeight:'bold',paddingBottom:30}}>
                  별명
                </Text>
          </View>
          <View style={{paddingLeft:40}}>
                <TextInput placeholder='별명 입력' placeholderTextColor="#909090"
                  style={{
                  width: "89%",
                  backgroundColor: '#EBEBEB',
                  borderRadius: 6,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 15,
                  padding: 4,
                  paddingLeft: 47,
            }}/>
              </View>
        </View>
        <View style={{paddingTop:70,paddingLeft:130,paddingRight:150,paddingBottom:300, backgroundColor: 'white'}}>
            <TouchableOpacity>
              <View style={{ padding:5,borderColor: '#113344', borderWidth:2, backgroundColor:'#113344'}}>
                <Text style={{color:'white', paddingLeft:24, paddingBottom:5}}>
                  회원가입
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
  )
}

export default Log3