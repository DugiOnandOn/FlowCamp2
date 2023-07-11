import { View, Text, Image } from 'react-native'
import React from 'react'



const ProfileBody = ({
    name,
    profileImage,
}) => {

  return (
        <View>
            <View style={{flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingVertical: 50,
            }}>
            <View style={{ alignItems: 'center'}}>
                <Image
                    source={{uri:profileImage}}
                    style={{width: 170, height: 170, borderRadius:60
                    }}
                />

                <Text style={{
                    paddingVertical: 5, 
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#224455'
                }}>
                    {name}
                </Text>
            </View>
            </View>
        </View>
  )
}

export default ProfileBody