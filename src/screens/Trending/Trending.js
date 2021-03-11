import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import TrendingItem from "../../components/TrendingItem/TrendingItem";
import {data} from "../../utils/data";

import { styles } from "./styles";

const Trending = () => {
  return (
    <ScrollView style={styles.mainScrollViewItem}>
      <View style={styles.mainWrapper}>
        {
          data.filter(filteringItem => filteringItem.trending).map((item, index) => (
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

export default Trending;