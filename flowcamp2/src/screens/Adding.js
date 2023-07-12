import { View, Text, Image, Touchable, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';

const item = require('../../images/place/addpic.png')
const Adding = ({navigation}) => {

  const [postImage, setPostImage] = useState()
  const [postInfo, setPostInfo] = useState({
    title: '',
    text: '',
    postImage: '',
  });

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append('title', postInfo.title);
      formData.append('text', postInfo.text);
      formData.append('image', {
        uri: postInfo.postImage,
        name: 'postImage.jpg',
        type: 'image/jpg',
      });

      // PUT 요청 보내기
      await Axios.put('http://172.10.5.152:80/travelpost', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      // 요청이 성공하면 이전 화면으로 돌아가기
      navigation.push("MyTab")
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  }

  const showPicker = () => {
    launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5
    }, (response) => {
      if (response.didCancel) {
        // 선택 취소
      } else if (response.errorCode) {
        // 에러 발생
        console.log('Error ocurred:', response.errorMessage);
      } else {
        const uri = response.assets[0].uri;
        const fileName = uri.split('/').pop();
        const path = `${RNFS.DocumentDirectoryPath}/${fileName}`;
        RNFS.copyFile(uri, path)
          .then(() => {
            setPostInfo(prevState => ({
              ...prevState,
              postImage: 'file://' + path,
            }));
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }


  return (
    <View>
      <View style={{position:'relative',flexDirection: 'row', alignItems: 'center', padding: '5%',
        
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.2,}}>
        <TouchableOpacity onPress={()=>{ navigation.goBack(); }}>
          <AntDesign name="arrowleft" style={{ color:'black', fontSize: 25, paddingTop:5, }} /> 
        </TouchableOpacity>
        <Text style={{paddingLeft:'10%', color:'#224455',fontSize:18,}}>
          여행기 공유
        </Text>
      </View>
      <View style={{position:'relative', paddingTop:'8%', paddingLeft:'35%'}}>
      <TouchableOpacity onPress={showPicker}>
        <Image source={postInfo.postImage ? { uri: postInfo.postImage } : item} 
        style={{ width: 120, height: 120, resizeMode: 'contain' }}/>
      </TouchableOpacity>
      </View>
      <View style={{paddingVertical: 10}}>
          <Text style={{opacity:0.5}}>제목</Text>
          <TextInput
            placeholder='제목을 입력하세요'
            onChangeText={newTitle => setPostInfo(prevState => ({...prevState,
              title: newTitle,}))}
            style={{fontSize: 16, borderBottomWidth:1, borderColor: '#CDCDCD'}}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{opacity:0.5}}>내용</Text>
          <TextInput
            placeholder='여행기를 알려주세요'
            onChangeText={newText => setPostInfo(prevState => ({...prevState,
              text: newText,}))}
            style={{fontSize: 16, borderBottomWidth:1, borderColor: '#CDCDCD'}}
          />
        </View>
        <View style={{paddingVertical: 1, paddingHorizontal:10, paddingBottom:6}}>
            <TouchableOpacity onPress={handleSave}
        style={{width: '100%',}}>
            <View
                style={{width: '100%', height: 40, borderColor: '#DEDEDE', borderWidth: 1, borderRadius: 5, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                <AntDesign name="pluscircleo" style={{ fontSize: 15, paddingTop:5, paddingHorizontal:5 }} />   
                <Text style ={{fontWeight: 'bold',fontSize: 14, letterSpacing:1, opacity:0.8,}}>
                    새로운 여행!
                </Text>
            </View>
        </TouchableOpacity>
        </View>
        <View style={{paddingVertical: 1, paddingHorizontal:10, paddingBottom:6}}>
            <TouchableOpacity onPress={handleSave}
        style={{width: '100%',}}>
            <View
                style={{width: '100%', height: 40, borderColor: '#DEDEDE', borderWidth: 1, borderRadius: 5, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                <AntDesign name="pluscircleo" style={{ fontSize: 15, paddingTop:5, paddingHorizontal:5 }} />   
                <Text style ={{fontWeight: 'bold',fontSize: 14, letterSpacing:1, opacity:0.8,}}>
                    새로운 여행!
                </Text>
            </View>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Adding