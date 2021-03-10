import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './style.js';

const TrendingItem = ({id, source, itemText, price, inlineStyles}) => {
  return (
    <View key={id} style={[styles.trendingItem, {marginRight: 20}, inlineStyles]}>
      <Image style={styles.cardImage} source={source}/>
      <Text>{itemText}</Text>
      <Text style={styles.bold}>${price}</Text>
    </View>
  );
};

export default TrendingItem;