import axios from 'axios';
import { useEffect } from 'react';

export const useFetchUserFollowers = ({
  userData,
  setFollowersData,
  setError,
}) => {
  useEffect(() => {
    if (userData) {
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
};
