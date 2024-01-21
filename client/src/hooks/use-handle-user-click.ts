import { useNavigation } from '@react-navigation/native';

export const useHandleUserClick = () => {
  const navigation = useNavigation();

  const handleUserClick = (login) => {
    navigation.navigate('UserProfile', { username: login });
  };

  return { handleUserClick };
};
