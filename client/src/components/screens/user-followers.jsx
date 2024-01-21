import React from 'react';
import { View } from 'react-native';
import { UserFollowersChart } from '../molecules/user-followers-chart';

export const UserFollowers = ({ followersData }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <UserFollowersChart followersData={followersData} />
    </View>
  );
};
