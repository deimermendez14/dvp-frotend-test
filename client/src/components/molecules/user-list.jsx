import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

export const UserList = ({ userData, handleUserClick}) => {
  return (
    <FlatList
      data={userData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleUserClick(item.login)}>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>
              Nombre de usuario: {item.login}
            </Text>
            <Text>ID: {item.id}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
