import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {IcBack} from '../../../assets';

const Header = ({title, subTitle, onPress, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <Pressable
          android_ripple={{color: '#8D92A3', borderless: false, radius: 20}}
          style={styles.btn}
          onPress={onPress}>
          <View style={styles.btnBack}>
            <IcBack />
          </View>
        </Pressable>
      )}

      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  btn: {
    marginRight: 16,
    marginLeft: -10,
  },
  btnBack: {
    padding: 16,
  },
});
