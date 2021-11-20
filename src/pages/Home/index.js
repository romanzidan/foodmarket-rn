import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyProfile} from '../../assets';

const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>FoodMarket</Text>
          <Text style={styles.desc}>Let’s get some foods</Text>
        </View>
        <Image source={DummyProfile} style={styles.profile} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FAFAFC',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingTop: 30,
    backgroundColor: '#ffffff',
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    marginTop: -5,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
