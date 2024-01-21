import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { useFetchUserInformation } from '../../hooks/use-fetch-user-information';

export const UserProfile = ({ route }) => {
  const { username } = route.params;

  const [userData, setUserData] = useState(null);

  useFetchUserInformation({ username, setUserData });

  return (
    <View style={{ padding: 20 }}>
      {userData ? (
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
            Perfil de Usuario
          </Text>
          <Image
            source={{ uri: userData.avatar_url }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginBottom: 10,
            }}
          />
          <Text>Nombre de usuario: {userData.login}</Text>
          <Text>ID: {userData.id}</Text>
        </View>
      ) : (
        <Text>Cargando datos del usuario...</Text>
      )}
    </View>
  );
};

UserProfile.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
