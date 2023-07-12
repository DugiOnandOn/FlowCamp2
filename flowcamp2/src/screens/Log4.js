import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Log4=({navigation})=>{
  
  return (
    <SafeAreaView>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10,
            paddingBottom: 10,
            backgroundColor: 'white',
            borderBottomColor: 'gray',
            borderBottomWidth: 0.2,}}
            >
            <TouchableOpacity
                onPress={()=>{
                navigation.goBack();
            }}>
                <AntDesign name="arrowleft" style={{ color:'black', fontSize: 25, paddingTop:5, }} /> 
            </TouchableOpacity>
        </View>
        <View>
          <View>
            
          </View>
        </View>
    </SafeAreaView>
  );
}
const login = () => {
  KakaoLogin.login().then((result) => {
      console.log("Login Success", JSON.stringify(result));
      getProfile();
  }).catch((error) => {
      if (error.code === 'E_CANCELLED_OPERATION') {
          console.log("Login Cancel", error.message);
      } else {
          console.log(`Login Fail(code:${error.code})`, error.message);
      }
  });
};

const getProfile = () => {
  KakaoLogin.getProfile().then((result) => {
      console.log("GetProfile Success", JSON.stringify(result));
  }).catch((error) => {
      console.log(`GetProfile Fail(code:${error.code})`, error.message);
  });
};
export default Log4;