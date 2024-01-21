// Main.js

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ErrorMessage } from './error-message';
import { BarChart } from 'react-native-chart-kit';
import { useHandleUserClick } from '../../hooks/use-handle-user-click';
import { useFetchUsers } from '../../hooks/use-fetch-users';

export const Main = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [followersData, setFollowersData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (userData) {
      // Obtener datos de seguidores para los 10 primeros usuarios
      const fetchFollowersData = async () => {
        try {
          const followersPromises = userData.slice(0, 10).map(async (user) => {
            const response = await axios.get(user.followers_url);
            return {
              name: user.login,
              followers: response.data.length,
            };
          });

          const followersData = await Promise.all(followersPromises);
          setFollowersData(followersData);
        } catch (error) {
          console.error('Error fetching followers data:', error);
          setError('Hubo un error al obtener los datos de seguidores.');
        }
      };

      fetchFollowersData();
    }
  }, [userData]);

  // const handleSearch = async () => {
  //   if (username.length < 4) {
  //     setError('Ingrese al menos 4 caracteres para la búsqueda.');
  //     return;
  //   }

  //   if (username.toLowerCase() === 'doublevpartners') {
  //     setError('No se permite la búsqueda de "doublevpartners".');
  //     return;
  //   }

  //   try {
  //     const response = await axios.get(
  //       `https://api.github.com/search/users?q=${username}`
  //     );
  //     setUserData(response.data.items.slice(0, 10));
  //     setError(null); // Limpiar el mensaje de error en caso de éxito
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     setError('Hubo un error al recuperar la información de GitHub.');
  //   }
  // };

  const { handleSearch } = useFetchUsers(username, setError, setUserData);

  const { handleUserClick } = useHandleUserClick();

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            padding: 5,
          }}
          placeholder="Ingrese el nombre de usuario 111111"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <Button
          title="Buscar en GitHub"
          onPress={handleSearch}
          color="#007AFF"
        />

        {error && <ErrorMessage message={error} />}

        {userData && (
          <View>
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

            {followersData && (
              <View style={{ marginTop: 20 }}>
                <Text
                  style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}
                >
                  Seguidores de los 10 primeros usuarios
                </Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View>
                    <BarChart
                      data={{
                        labels: followersData.map((user) =>
                          user.name.length > 10
                            ? user.name.substring(0, 10) + '...'
                            : user.name
                        ),
                        datasets: [
                          {
                            data: followersData.map((user) => user.followers),
                          },
                        ],
                      }}
                      width={1000} // Ancho fijo del gráfico
                      height={400} // Ajusta el alto según el número de usuarios
                      chartConfig={{
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
                        labelColor: (opacity = 1) =>
                          `rgba(0, 0, 0, ${opacity})`,
                        style: {
                          borderRadius: 16,
                        },
                        barPercentage: 0.8,
                        useShadowColorFromDataset: false,
                        labelFontSize: 12, // Ajusta el tamaño de la fuente de los labels
                      }}
                      style={{
                        marginVertical: 8,
                        borderRadius: 16,
                      }}
                      horizontalLabelRotation={0} // No es necesario rotar los labels en el eje Y
                      yAxisInterval={1}
                      showValuesOnTopOfBars
                    />
                  </View>
                </ScrollView>
              </View>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
};
