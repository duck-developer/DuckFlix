import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackRoutes from './stack.routes'
export default class Routes extends Component {
  render() {
    return (
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
  }
}