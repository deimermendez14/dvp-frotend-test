import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useAppContext } from '../../context/app-context';
import { useHandleUserClick } from '../../hooks/use-handle-user-click';

export const UserList = () => {
  const { userData } = useAppContext();

  const { handleUserClick } = useHandleUserClick();

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
