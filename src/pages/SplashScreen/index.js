import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2500);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <Logo />
      <Text style={styles.title}>FoodMarket</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F87F3B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 5,
    fontSize: 24,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
});
