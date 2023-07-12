import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SelectPlace = ({route, navigation})=>{
    console.log(route.params);
    const [place, setPlace] = useState('');

    const handleSpot = async () => {
        try {
          Axios.post('http://172.10.5.152:80/travelplan', {
            idtravelplan: route.params.id,
            day: route.params.dayId,
            spot: place,
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then(response => {
            navigation.goBack();
          }).catch(error => console.log(error));
          } catch (error) {
            console.error(error);
          }
        };

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
                    <Text style={{ fontSize: 18, color: '#113344', fontWeight: 'bold', paddingBottom: 30 }}>
                        장소 추가
                    </Text>
                </View>
                <View>
                <TextInput placeholder='원하는 장소를 저장하세요!' placeholderTextColor="#909090"
                    style={{
                        width: "89%",
                        backgroundColor: '#EBEBEB',
                        borderRadius: 6,
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 15,
                        padding: 4,
                        paddingLeft: 35,
                        }}
                    onChangeText={text => setPlace(text)}
                    value={place}/>
                </View>
            </View>
            <View style={{ paddingTop: 20, paddingLeft: 130, paddingRight: 150, paddingBottom: 300, backgroundColor: 'white' }}>
                <TouchableOpacity onPress={ handleSpot }>
                <View style={{ padding: 5, borderColor: '#113344', borderWidth: 2, backgroundColor: '#113344' }}>
                    <Text style={{ color: 'white', paddingLeft: 28, paddingBottom: 5 }}>
                        입력
                    </Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SelectPlace