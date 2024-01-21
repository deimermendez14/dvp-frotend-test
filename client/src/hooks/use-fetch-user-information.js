import { useEffect } from 'react';
import { getUserInformation } from '../services/get-user-information.service';

export const useFetchUserInformation = ({ username, setUserData }) => {
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { response } = await getUserInformation(username);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [username]);
};
