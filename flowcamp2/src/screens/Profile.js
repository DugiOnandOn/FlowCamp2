import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileBody from '../components/ProfileBody'
import ProfileButton from '../components/ProfileButton'
import List from '../components/List'

const Profile = () => {

  return (
    <SafeAreaView
      style={{width:'100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', padding:10}}>
        <ProfileBody
            name="Honggil"
            profileImage={require('../../images/place/image2.jpeg')}
        />
      </View>
      <ProfileButton name="Honggil" profileImage={require('../../images/place/image2.jpeg')}/>
      <View style={{backgroundColor:'white', paddingTop:20,paddingLeft:59, paddingBottom:20}}>
        <Text style={{fontSize:17,
                    fontWeight: 'bold',
                    color: '#533799'}}>
          내 여행
        </Text>
      </View>
      <View style={{height: 190}}>
        <ScrollView>
            <List/>
          </ScrollView>
      </View>
        
  
    </SafeAreaView>
  )
}

export default Profile