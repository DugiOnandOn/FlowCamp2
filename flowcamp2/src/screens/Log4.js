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
          <Text>
            안녕하세요
          </Text>
        </View>
    </SafeAreaView>
  );
}

export default Log4;