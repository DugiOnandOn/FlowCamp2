/**
 * @format
 */

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native"

import PostScreen from "./Post/PostScreen";
import ProfileScreen from "./Profile/ProfileScreen";
import {AppRegistry} from 'react-native';
import App from './app.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
