import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ZegoUIKitPrebuiltCallFloatingMinimizedView } from '@zegocloud/zego-uikit-prebuilt-call-rn';
import AppNavigation from './AppNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (<NavigationContainer >
    <AppNavigation />
    <ZegoUIKitPrebuiltCallFloatingMinimizedView />
  </NavigationContainer>);
}