import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Component } from 'react'
import Login from '@/layouts/login_page'
import Register from '../layouts/register_page'
import TabRoutes from './tab.routes'

const Stack = createNativeStackNavigator()
export default class StackRoutes extends Component {
  render() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                component={Login}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name='Register'
                component={Register}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name='Tab'
                component={TabRoutes}
                options={{headerShown:false}}
            /> 

        </Stack.Navigator>
    )
  }
}