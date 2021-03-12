import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import TrendingItem from "../../components/TrendingItem/TrendingItem";
import {data} from "../../utils/data";

import { styles } from "./styles";

const Trending = () => {
  const [trendingData, setTrendingData] = useState([]);

  const loadInitialData = () => {
    const filteredData = data.filter(filteringItem => filteringItem.trending);
    setTrendingData(filteredData);
  };

  const handleSearch = (inputValue) => {
    if (inputValue) {
      let settingSearchedData = [];
      data.map((element) => {
        if (element.name.toLowerCase().includes(inputValue.toLowerCase())) {
          settingSearchedData.push(element);
        }
      });
      if (settingSearchedData.length) {
        setTrendingData(settingSearchedData);
      }
      else {
        setTrendingData([]);
      }
    }
    else {
      loadInitialData();
    }
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <>
      <TextInput
        style={{ height: 60, borderColor: '#000', borderWidth: 1 }}
        placeholder="   Type Name..."
        onChangeText={handleSearch}
      />
      <ScrollView style={styles.mainScrollViewItem}>
        <View style={styles.mainWrapper}>
          {
            trendingData.map((item, index) => (
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
    </>
  )
};

export default Trending;
