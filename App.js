import React from 'react';
import { Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/Home/Home";
import Profile from "./src/screens/Profile/Profile";
import Trending from "./src/screens/Trending/Trending";
import Categories from "./src/screens/Categories/Categories";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Trending" component={Trending} />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={({ route }) => ({
            title: `Categories / ${route.params.type}`
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
