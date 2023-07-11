import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import Status from './src/screens/Status';
import Adding from './src/screens/Adding';
import EditProfile from './src/screens/EditProfile';
import Ionic from 'react-native-vector-icons/Ionicons';
import PostItems from './src/components/PostItems';
import Places from './src/components/Places';
import PlaceItems from './src/components/PlaceItems';
import Period from './src/components/Period';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator(); 
  const BottomTabScreen = ({navigation}) =>{
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
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name ="Bottom" component={BottomTabScreen}/>
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name ="Adding" component={Adding}/>
        <Stack.Screen name ="EditProfile" component={EditProfile}/>
        <Stack.Screen name ="PostItems" component={PostItems}/>
        <Stack.Screen name="Places" component={Places}/>
        <Stack.Screen name="PlaceItems" component={PlaceItems}/>
        <Stack.Screen name="Period" component={Period}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
