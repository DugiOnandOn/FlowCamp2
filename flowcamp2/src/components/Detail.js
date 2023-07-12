import React from "react";
import {View, Text, TouchableOpacity, ScrollView} from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Days from "./Days";

const Detail=({navigation})=>{
    const detailInfo = {place: '서울',
        start_date:'2023-07-01',
        end_date:'2023-07-04',
        Dayspotmap:[{
            day: 1,
            spot: ['성북동','삼청동', '종로', '광화문']
        },
        {
            day: 2,
            spot: ['문래동','인사동', '경북궁', '창덕궁']
        },
        {
            day: 3,
            spot: ['도곡동','대치동', '서초동']
        },
        {
            day: 4,
            spot: ['둔산동','궁동', '어은동']
        },
        ]
    }
    return(
        <View>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10,
            paddingBottom: 10,
            backgroundColor: 'white',
            }}>
            <TouchableOpacity
                onPress={()=>{
                navigation.goBack();
            }}>
                <AntDesign name="arrowleft" style={{ color:'black', fontSize: 25, paddingTop:5, }} /> 
            </TouchableOpacity>
            <View style={{flexDirection: 'column', paddingLeft:10}}>
                <Text style={{fontSize:15, color:'#335566', fontWeight:'bold'}}>
                    {detailInfo.place} 여행
                </Text>
                <Text>
                    {detailInfo.start_date} ~ {detailInfo.end_date}
                </Text>
            </View>
            
        </View>
        <View>
            <ScrollView>
                <Days/>
            </ScrollView>
        </View>
        </View>
    )
}

export default Detail