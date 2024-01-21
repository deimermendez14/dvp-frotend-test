import { useNavigation } from '@react-navigation/native';

export const useHandleUserClick = () => {
  const navigation = useNavigation();

  const handleUserClick = (login) => {
    navigation.navigate('GitHub Profile', { username: login });
  };

  return { handleUserClick };
};
