import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileBody from '../components/ProfileBody'
import ProfileButton from '../components/ProfileButton'
import List from '../components/List'

const Profile = () => {

  const [userInfo, setUserInfo] = useState({
    userImage: '',
    username: '',
    travelMap: [],
  });
  console.log("user");

  useEffect(() => {
    console.log("실행");
    // GET 요청을 보내어 데이터를 가져옴
    fetchUserData = async () => {
      console.log("요청");
      try {
        const response = await Axios.get('http://172.10.5.152:80/user');
        const data = response.data;
        console.log(data);
        // 필요한 데이터를 추출하여 user 상태를 업데이트
        const { userImage, username, travelMap } = data;
        setUserInfo({
          userImage,
          username,
          travelMap,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <SafeAreaView
      style={{width:'100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', padding:10}}>
        <ProfileBody
            name={userInfo.username}
            profileImage={userInfo.userImage}
        />
      </View>
<<<<<<< HEAD
      <ProfileButton name={userInfo.username} profileImage={userInfo.userImage}/>
      
=======
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
        
  
>>>>>>> client
    </SafeAreaView>
  )
}

export default Profile