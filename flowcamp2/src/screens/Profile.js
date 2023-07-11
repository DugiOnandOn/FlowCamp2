import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileBody from '../components/ProfileBody'
import ProfileButton from '../components/ProfileButton'

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
      
    </SafeAreaView>
  )
}

export default Profile