import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import { InputTypeProps } from '@/interfaces/types/types_input'
export default class InputText extends Component<InputTypeProps> {
  render() {
    const { placeholder, value, onChangeText, ...rest } = this.props;

    return (
      <View>
        <TextInput
          style={{
            backgroundColor: 'white',
            paddingVertical:7,
            fontSize:15,
            width:220,
            marginBottom:16,
            borderRadius:3
        }}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          {...rest}
        />
      </View>
    );
  }
}
