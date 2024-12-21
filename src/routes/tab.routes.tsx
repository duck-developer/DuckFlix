import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from '../layouts/home_page'
import PerfilUserPage from '../layouts/perfil_user_page'

import AntDesign from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator()
export default class TabRoutes extends Component {
    render() {
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#222',
                    },
                    tabBarActiveTintColor: 'red'
                }}>
                <Tab.Screen
                    name='Home'
                    component={HomePage}
                    options={{
                        headerShown: false,
                        tabBarActiveTintColor: 'red',
                        tabBarInactiveTintColor: 'white',
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name='playcircleo' size={size} color={color} />
                        )
                    }} />
                <Tab.Screen
                    name='Perfil'
                    component={PerfilUserPage}
                    options={{
                        headerShown: false,
                        tabBarActiveTintColor: 'red',
                        tabBarInactiveTintColor: 'white',
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name='user' color={color} size={size} />
                        )
                    }}

                />
            </Tab.Navigator>
        )
    }
}