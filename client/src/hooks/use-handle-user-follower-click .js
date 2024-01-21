import { useNavigation } from '@react-navigation/native';

export const useHandleUserFollowerClick = () => {
  const navigation = useNavigation();

  const handleUserClick = () => {
    navigation.navigate('GitHub Followers');
  };

  return { handleUserClick };
};
