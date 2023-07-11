import {SafeAreaView, ScrollView, View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import PlaceItems from './PlaceItems'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Places = ({navigation})=>{
    const placeInfo=[
        {
            place: '서울',
        },
        {
            place: '부산',
        },
        {
            place: '제주',
        },
        {
            place: '경주',
        },
        {
            place: '강릉',
        },
        {
            place: '대전',
        },
        {
            place: '대구',
        },
        {
            place: '수원',
        },
        {
            place: '인천',
        },
        {
            place: '광주',
        },

    ]
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
        <Text style={{paddingLeft:141, color:'#224455',fontSize:18,}}>
            장소
        </Text>
        </View>
        <ScrollView>
            {placeInfo.map((data, index)=> {
                return(
                    <PlaceItems key={index} data={data} />
                )
            })}
        </ScrollView>
        </SafeAreaView>
        
    );
} 
export default Places;