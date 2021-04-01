import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text Text style={styles.titleStyle}>
          {title}
        </Text>
        <View style={{flexDirection: 'row', margin: 5}}>
          <Image
            source={require('../../assets/search.png')}
            style={{width: 20, height: 20, marginRight: 10}}
            tintColor="white"
          />
          <Image
            source={require('../../assets/bell.png')}
            style={{width: 20, height: 20, marginRight: 10}}
            tintColor="white"
          />
          <Image
            source={require('../../assets/shopping-cart.png')}
            style={{width: 20, height: 20}}
            tintColor="white"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#295939',
    padding: 20,
  },
  titleStyle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Header;
