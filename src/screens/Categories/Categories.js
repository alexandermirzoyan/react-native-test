import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { data } from "../../utils/data";

import { styles } from "./styles";
import TrendingItem from "../../components/TrendingItem/TrendingItem";

const Categories = ({ route }) => {
  const categoryType = route.params.type;

  const getDataViaCategory = () => {
    switch (categoryType) {
      case 'All':
        return data;
      case 'Man':
        return data.filter(filteringItem => filteringItem.category === 'man');
      case 'Woman':
        return data.filter(filteringItem => filteringItem.category === 'woman');
      default:
    }
  };

  return (
    <ScrollView style={styles.mainScrollViewItem}>
      <View style={styles.mainWrapper}>
        {
          getDataViaCategory().map((item, index) => (
            <TrendingItem
              id={item.id}
              source={item.image}
              itemText={item.name}
              price={item.price}
              inlineStyles={{
                marginBottom: 20
              }}
            />
          ))
        }
      </View>
    </ScrollView>
  )
};

export default Categories;