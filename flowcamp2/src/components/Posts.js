import {View } from 'react-native'
import React, { useState, useEffect } from 'react'
import PostItems from './PostItems'
import Axios from'axios'


const Posts = ({navigation})=>{
    const [postInfo, setPostInfo] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await Axios.get('http://172.10.5.152:80/travelpost');
            setPostInfo(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching posts:', error);
          }
        };
      
        fetchPosts();
      }, []);
        
    return (
        <View>
            {postInfo.map((data, index)=> {
                return(
                    <PostItems key={index} data={data} />
                )
            })}
        </View>
    );
} 
export default Posts;