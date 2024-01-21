// UserProfile.js

import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';

export const UserProfile = ({ route }) => {
  const { username } = route.params;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [username]);

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
          {/* Agregar información adicional según tus necesidades */}
        </View>
      ) : (
        <Text>Cargando datos del usuario...</Text>
      )}
    </View>
  );
};

// Añadir validación de PropTypes
UserProfile.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
