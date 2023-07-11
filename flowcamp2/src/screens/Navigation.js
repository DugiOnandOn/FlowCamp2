import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Search from './Search';
import Profile from './Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Log2 from './Log2';
import Log3 from './Log3';
import Log4 from './Log4';
import Log5 from './Log5';

import PostItems from '../components/PostItems';
import Places from '../components/Places';
import PlaceItems from '../components/PlaceItems';
import Period from '../components/Period';
import Status from './Status';
import Adding from './Adding';
import EditProfile from './EditProfile';

const Tab = createBottomTabNavigator(); 
const MyTab=() =>{
    return(
        <Tab.Navigator
          screenOptions={({route})=>({
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
              height: 60,
            },
            tabBarIcon: ({focused, size, color})=>{
              let iconName;
              color = 'black';
              if(route.name === 'Home'){
                iconName = focused ? 'home-sharp' : 'home-outline';
              }else if(route.name === 'Search'){
                iconName = focused ? 'search' : 'ios-search-outline';
              }else if(route.name === 'Profile'){
                iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
              }
              return <Ionic name={iconName} size={size} color={color}/>
            },
          })}
      >
        <Tab.Screen name ="Home" component={Home}/>
        <Tab.Screen name ="Search" component={Search}/>
        <Tab.Screen name ="Profile" component={Profile}/>
      </Tab.Navigator>
    )
}

const Stack = createNativeStackNavigator();

const Navigation = () =>{
    return(<NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name ="Log5" component={Log5}/>
          <Stack.Screen name="Log2" component={Log2} />
          <Stack.Screen name ="Log3" component={Log3}/>
          <Stack.Screen name ="Log4" component={Log4}/>
          <Stack.Screen name ="Bottom" component={MyTab}/>
          <Stack.Screen name ="Adding" component={Adding}/>
          <Stack.Screen name ="PostItems" component={PostItems}/>
          <Stack.Screen name="Status" component={Status} />
          <Stack.Screen name ="EditProfile" component={EditProfile}/>
          <Stack.Screen name="Places" component={Places}/>
          <Stack.Screen name="PlaceItems" component={PlaceItems}/>
          <Stack.Screen name="Period" component={Period}/>
        </Stack.Navigator>
      </NavigationContainer>
      );

}
export default Navigation