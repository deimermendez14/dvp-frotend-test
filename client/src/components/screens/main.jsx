import React, { useState } from 'react';
import { View } from 'react-native';
import { useFetchUserFollowers } from '../../hooks/use-fecth-user-followers';
import { useFetchUsers } from '../../hooks/use-fetch-users';
import { useHandleUserClick } from '../../hooks/use-handle-user-click';
import { UserFollowersChart } from '../molecules/user-followers-chart';
import { UserList } from '../molecules/user-list';
import { UserSearchForm } from '../molecules/user-search-form';

export const Main = () => {
  const [username, setUsername] = useState('');

  const [userData, setUserData] = useState(null);

  const [followersData, setFollowersData] = useState(null);

  const [error, setError] = useState(null);

  const { handleSearch } = useFetchUsers({ setError, setUserData, username });

  const { handleUserClick } = useHandleUserClick();

  useFetchUserFollowers({ setError, setFollowersData, userData });

  return (
    <View style={{ padding: 20 }}>
      <UserSearchForm
        error={error}
        handleSearch={handleSearch}
        setUsername={setUsername}
        username={username}
      />

      {userData && (
        <View>
          <UserList userData={userData} handleUserClick={handleUserClick} />
          {followersData && (
            <View style={{ marginTop: 20 }}>
              <UserFollowersChart followersData={followersData} />
            </View>
          )}
        </View>
      )}
    </View>
  );
};
