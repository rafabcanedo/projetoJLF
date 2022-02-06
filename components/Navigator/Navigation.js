import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import HomeScreen from '../screens/Home';
import ScannerScreen from '../screens/Scanner';
import TextoCodigo from '../screens/TextoCodigo';

const Stack = createStackNavigator();

export default function Navigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            >
                <Stack.Screen name ="Login" component={Login} />
                <Stack.Screen name ="Home" component={HomeScreen} />
                <Stack.Screen name ="Scanner" component={ScannerScreen} />
                <Stack.Screen name ="TextoCodigo" component={TextoCodigo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};