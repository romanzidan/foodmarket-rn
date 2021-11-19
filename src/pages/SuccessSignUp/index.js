import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSuccessSignUp} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlSuccessSignUp />
      <Gap h={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap h={6} />
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text style={styles.subTitle}>some foods as a self-reward</Text>
      <Gap h={30} />
      <View style={styles.btnContainer}>
        <Button
          title="Find Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FAFAFC',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 80,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  btnContainer: {
    width: '100%',
  },
});
