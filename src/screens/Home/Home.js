import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import coverImage from '../../images/image.jpg';
import manIcon from '../../images/man-icon.png';
import womanIcon from '../../images/woman-icon.png';
import TrendingItem from '../../components/TrendingItem/TrendingItem';
import { data } from "../../utils/data";

const styles = StyleSheet.create({
  imageStyle: {
    maxWidth: "100%",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    marginBottom: 40,
  },
  groupWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 20,
  },
  link: {
    color: "#0CA9B0",
  },
  bold: {
    fontWeight: "bold",
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 40,
  },
  categoryItem: {
    padding: 20,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: "white",
    marginBottom: 20,
  }
});

const Home = ({ navigation }) => {
  const handleTrendingNavigation = () => {
    navigation.navigate('Trending');
  };

  const handleCategoriesNavigation = (type) => {
    navigation.navigate('Categories', { type });
  };

  const getItemsCount = (category) => {
    let itemsCount = 0;
    data.map((dataItem) => {
      if (dataItem.category === category) {
        itemsCount++;
      }
    });
    return itemsCount;
  };

  return (
    <ScrollView style={{backgroundColor: "#EFEEEE"}}>
      {/*<Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />*/}

      <Image style={styles.imageStyle} source={coverImage}/>
      <View style={styles.groupWrapper}>
        <Text style={styles.bold}>Trending</Text>
        <Text onPress={handleTrendingNavigation} style={styles.link}>Show all</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.wrapper}
      >
        {
          data.filter(filteringItem => filteringItem.trending).map((item, index) => (
            <TrendingItem
              id={item.id}
              source={item.image}
              itemText={item.name}
              price={item.price}
              inlineStyles={index === 0 ? {marginLeft: 20} : null}
            />
          ))
        }
      </ScrollView>

      <View style={styles.groupWrapper}>
        <Text style={styles.bold}>Categories</Text>
        <Text onPress={() => handleCategoriesNavigation('All')} style={styles.link}>Show all</Text>
      </View>

      <View>
        <TouchableWithoutFeedback onPress={() => handleCategoriesNavigation('Woman')}>
          <View style={[styles.categoryItem, {flex: 1, flexDirection: 'row'}]}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image style={{width: 30, height: '100%', resizeMode: 'contain'}} source={womanIcon}/>
              <Text>Woman <Text style={{color: 'grey'}}>({getItemsCount('woman')} items)</Text></Text>
            </View>
            <Text> > </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleCategoriesNavigation('Man')}>
          <View style={[styles.categoryItem, {flex: 1, flexDirection: 'row'}]}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image style={{width: 30, height: '100%', resizeMode: 'contain'}} source={manIcon}/>
              <Text>Man <Text style={{color: 'grey'}}>({getItemsCount('man')} items)</Text></Text>
            </View>
            <Text> > </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

    </ScrollView>
  );
};

export default Home;
