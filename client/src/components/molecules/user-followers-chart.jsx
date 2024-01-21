import React, { Fragment } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { CustomBarChart } from '../atoms/custom-bar-chart';
import { useAppContext } from '../../context/app-context';

export const UserFollowersChart = () => {
  const { followersData } = useAppContext();

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
