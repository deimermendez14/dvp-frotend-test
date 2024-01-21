import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAppContext } from '../../context/app-context';
import { useFetchUserFollowers } from '../../hooks/use-fecth-user-followers';
import { useHandleUserFollowerClick } from '../../hooks/use-handle-user-follower-click ';
import { UserList } from '../molecules/user-list';
import { UserSearchForm } from '../molecules/user-search-form';

export const Main = () => {
  const { setError, setFollowersData, userData, followersData } =
    useAppContext();

  useFetchUserFollowers({ setError, setFollowersData, userData });
  const { handleUserClick } = useHandleUserFollowerClick();

  return (
    <View style={{ padding: 20 }}>
      <UserSearchForm />
      {userData && (
        <View>
          <UserList />
          {followersData && (
            <TouchableOpacity onPress={() => handleUserClick()}>
              <Text style={{ fontWeight: 'bold' }}>
                Click para ver los seguidores
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};
