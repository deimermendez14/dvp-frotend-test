import React from 'react';
import { TextInput } from 'react-native';

export const CustomTextInput = ({ username, setUsername }) => {
  return (
    <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
      }}
      placeholder="Ingrese el nombre de usuario"
      onChangeText={(text) => setUsername(text)}
      value={username}
    />
  );
};
