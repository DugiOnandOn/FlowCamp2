import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SelectPlace = ({navigation})=>{
    const [place, setPlace] = useState('');
    return(
        <View style={{position: 'relative'}}>
            <View style={{position:'relative',flexDirection: 'row', alignItems: 'center', padding: '3%',
                paddingBottom: '3%',
                backgroundColor: 'white',
                }}>
                <TouchableOpacity
                    onPress={()=>{
                    navigation.goBack();
                }}>
                    <AntDesign name="arrowleft" style={{ color:'black', fontSize: 25, paddingTop:'1%', }} /> 
                </TouchableOpacity>
            </View>
            <View>
                <View>
                    <Text style={{ fontSize: 18, color: '#113344', fontWeight: 'bold', paddingLeft:'38%', backgroundColor:'white' }}>
                        장소 추가
                    </Text>
                </View>
                <View style={{paddingTop:'15%', paddingLeft:'10%', backgroundColor:'white', paddingRight:'5%',paddingBottom:'7%'}}>
                <TextInput placeholder='원하는 장소를 저장하세요!' placeholderTextColor="#909090"
                    style={{
                        width: "89%",
                        backgroundColor: '#EBEBEB',
                        borderRadius: 6,
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 15,
                        padding: 4,
                        paddingLeft: 70,
                        }}
                    onChangeText={text => setPassword(text)}
                    value={place}/>
                </View>
            </View>
            <View style={{position:'relative', paddingTop: '7%', paddingLeft: '35%', paddingRight: '39%', paddingBottom: '150%', backgroundColor: 'white' }}>
                <TouchableOpacity>
                <View style={{ padding: '7%', borderColor: '#113344', borderWidth: 2, backgroundColor: '#113344' }}>
                    <Text style={{ color: 'white', paddingLeft: '33%', paddingBottom: '5%' }}>
                        입력
                    </Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SelectPlace