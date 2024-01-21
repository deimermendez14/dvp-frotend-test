import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Main } from './src/components/screens/main';
import { UserProfile } from './src/components/screens/user-profile';
import { AppContextProvider } from './src/context/app-context';
import { UserFollowers } from './src/components/screens/user-followers';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="GitHub Search" component={Main} />
          <Stack.Screen name="GitHub Profile" component={UserProfile} />
          <Stack.Screen name="GitHub Followers" component={UserFollowers} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
};

export default App;
