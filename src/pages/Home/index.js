import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyFood1, DummyFood2, DummyProfile} from '../../assets';
import {FoodCard, Gap} from '../../components';

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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.foodCardContainer}>
          <Gap w={24} />
          <FoodCard image={DummyFood1} name="Cherry Healthy" />
          <FoodCard image={DummyFood2} name="Burger Tamayo" />
        </View>
      </ScrollView>
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
    fontFamily: 'Poppins-Medium',
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
  foodCardContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
});
