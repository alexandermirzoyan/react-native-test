import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   trendingItem: {
       flex: 1,
       flexDirection: 'column',
       alignItems: 'center',
       backgroundColor: 'white',
       paddingBottom: 10,
       borderRadius: 10,
       shadowColor: "#000",
       shadowOffset: {
           width: 0,
           height: 5,
       },
       shadowOpacity: 0.36,
       shadowRadius: 6.68,
       elevation: 11,
   },
   cardImage: {
       width: 150,
       height: 150,
   },
});