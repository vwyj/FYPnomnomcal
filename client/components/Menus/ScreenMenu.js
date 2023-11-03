import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Register from '../../screens/auth/Register';
import Login from '../../screens/auth/Login';
import { AuthContext } from '../../context/authContext';
import HeaderMenu from './HeaderMenu';

const ScreenMenu = () => {
    // Global State
    const [state] = useContext(AuthContext)
    // Auth Condition True False
    const authenticatedUser = state?.user && state?.token;
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Login'>
            {authenticatedUser ? (
            <>
                <Stack.Screen 
                    name='Home'
                    component={Home}
                    options={{
                        title: "nomnomcal",
                        headerRight: () => <HeaderMenu/>,
                    }}
                />
            </>
            ) : (
            <>
                <Stack.Screen 
                    name='Register'
                    component={Register}
                    options={{ headerShown: false }}
                />
        
                <Stack.Screen  
                    name='Login'
                    component={Login}
                    options={{ headerShown: false }}
                />
            </>
            ) }
        </Stack.Navigator>
    );
};

export default ScreenMenu;