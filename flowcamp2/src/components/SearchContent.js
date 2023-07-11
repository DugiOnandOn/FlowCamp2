import { View, Text, TouchableOpacity, Image} from 'react-native'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'


const SearchContent = () => {

  const [searchData, setSearchData] = useState([]);
  const place = "캐나다";

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await Axios.get(`http://172.10.5.152:80/travelpost/search/${place}`);
      setSearchData(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchSearch();
  }, []);

  return (
    <View style={{backgroundColor: 'white'}}>
      {searchData.map((data, index)=>{
          return(
            <View key={index}>
              {data.id===0 ?
                <View style={{flexDirection: 'row',flexWrap: 'wrap',
                  justifyContent: 'space-between', width:'100%',}}>
                  {data.images.map((imageData, imageIndex)=>{
                      return (
                        <TouchableOpacity key = {imageIndex}
                          style={{paddingStart:2, paddingEnd:2,paddingBottom: 2, width: '50%',}}>
                          <Image
                            source={imageData}
                            style={{width: '100%', height: 150}}
                          />
                        </TouchableOpacity>
                      );
                  })}
                  </View>
                  : null}
            </View>
          )
      })}
    </View>
  )
}

export default SearchContent