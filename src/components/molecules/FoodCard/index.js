import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IcStar, IcStarOff} from '../../../assets';

const FoodCard = ({image, name}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.starContainer}>
            <IcStar />
            <IcStar />
            <IcStar />
            <IcStar />
            <IcStarOff />
          </View>
          <Text>4.5</Text>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#8D92A3',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    width: 200,
    height: 210,
    overflow: 'hidden',
    marginRight: 24,
  },
  image: {
    height: 140,
    width: 200,
  },
  content: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    marginRight: 4,
  },
});
