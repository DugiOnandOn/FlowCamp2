import { useNavigation } from "@react-navigation/native";
import { Center } from "native-base";
import React from "react";
import {View, Text, TouchableOpacity} from "react-native"

const Days = ()=>{
    const detInfo = {place: '서울',
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
        {
            day: 5,
            spot: ['1동','2동', '3동', '4동', '5동','6동']
        },
        ]
    }
    return(
        <View style={{position:'relative', flexDirection:'column', backgroundColor:'white', paddingTop:'5%'}}>
            {detInfo.Dayspotmap.map((data, index)=> {
                return(
                    <View style={{position:'relative', flexDirection:'column',padding:'3%',}}>
                        <View style={{position:'relative', flexDirection:'column', borderColor: 'gray',
                    borderWidth: 1,borderRadius:14}}>
                        <Text style={{fontSize:20, paddingLeft:'5%', paddingBottom:'5%', color:'#533799', fontWeight:'bold', paddingTop:'3%'}}>
                            day {data.day}
                        </Text>
                        <View>
                            {data.spot.map((data, index)=>{
                                return(
                                    <View style={{flexDirection:'row', alignContents:'center', paddingBottom: '5%', paddingHorizontal:'5%'}}>
                                    <View style={{alignItems:'center',borderColor:'#113344',borderWidth:2, borderRadius: 100, width:25, height:25,}}>
                                        <Text style={{color:'#533799', fontWeight:'bold'}}>{index+1}</Text>
                                    </View>
                                    <View>
                                    <Text style={{paddingLeft:'4%', color:'#113344', fontWeight:'bold'}}>
                                        {data}
                                    </Text>
                                    </View>
                                </View>
                                )
                            })}
                        </View>
                            <TouchableOpacity>
                                <View style={{paddingLeft:'6%', paddingBottom:'3%'}}>
                                    <View style={{flexDirection:'row',borderColor:'black', borderWidth:2, width: '22%',borderRadius:14, backgroundColor:'#113344'}}>
                                        <Text style={{color: 'white', paddingBottom:'5%', paddingLeft:'10%', fontWeight:'bold'}}>
                                            장소 추가
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                )
            })}
        </View>
        
    )
}

export default Days