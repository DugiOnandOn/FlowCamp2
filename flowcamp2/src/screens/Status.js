// Status.js
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons';


const Status = ({ route, navigation}) => {

  const{idtravelpost} = route.params;
  const { username } = route.params;
  const{ userImage } = route.params;
  const { postImage } = route.params;
  const [NextInfo, setPostInfo] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await Axios.get(`http://172.10.5.152:80/travelpost/${idtravelpost}`);
            setPostInfo(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching posts:', error);
          }
        };
      
        fetchPosts();
      }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <StatusBar backgroundColor="black" barStyle="light-content"/>

      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '90%',
          justifyContent:'space-between'
        }}
      >
        <View
          style={{
            width: 32,
            height: 32,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={{uri:userImage}}
            style={{
              borderRadius: 12,
              backgroundColor: 'blue',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <Text style={{ color: 'black', fontSize: 15, paddingLeft: 10 }}>
            {username}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic
              name="close"
              style={{ fontSize: 20, color: 'black', opacity: 0.6 }}
            />
          </TouchableOpacity>
        </View>
        
      </View>
      <View
      style={{
        width: '100%',
        height: '85%'
      }}>
      <Image
        source={{uri:postImage}}
        style={{ width: '100%', height: '40%'}}
      />
      <Text style={{fontSize: 23, color: 'black', paddingLeft:20, paddingTop:30, fontWeight: 'bold' }}>
          {NextInfo[0].title}
      </Text>
      <Text style={{fontSize:16, color: 'black', padding: 25, paddingVertical: 26, lineHeight: 26}}>
         {NextInfo[0].context}
      </Text>
      </View>
      
    </SafeAreaView>
  );
};

export default Status;
