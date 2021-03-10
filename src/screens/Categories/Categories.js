import React from 'react';
import { Text } from 'react-native';

const Categories = ({ route }) => {
  return <Text>Hello from {route.params.type} categories</Text>
};

export default Categories;