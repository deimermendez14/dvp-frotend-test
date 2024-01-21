import React, { Fragment } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { CustomBarChart } from '../atoms/custom-bar-chart';

export const UserFollowersChart = ({ followersData = [] }) => {
  return (
    <Fragment>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        Seguidores de los 10 primeros usuarios
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          <CustomBarChart followersData={followersData} />
        </View>
      </ScrollView>
    </Fragment>
  );
};
