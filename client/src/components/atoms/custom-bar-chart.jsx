import React from 'react';
import { BarChart } from 'react-native-chart-kit';

export const CustomBarChart = ({ followersData = [] }) => {
  return (
    <BarChart
      data={{
        labels: followersData.map((user) =>
          user.name.length > 10 ? user.name.substring(0, 10) + '...' : user.name
        ),
        datasets: [
          {
            data: followersData.map((user) => user.followers),
          },
        ],
      }}
      width={1000}
      height={400}
      chartConfig={{
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        barPercentage: 0.8,
        useShadowColorFromDataset: false,
        labelFontSize: 12,
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
      horizontalLabelRotation={0}
      yAxisInterval={1}
      showValuesOnTopOfBars
    />
  );
};
