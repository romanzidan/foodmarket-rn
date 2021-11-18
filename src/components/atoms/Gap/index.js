import React from 'react';
import {StyleSheet, View} from 'react-native';

const Gap = ({w, h}) => {
  return <View style={styles.page(w, h)} />;
};

export default Gap;

const styles = StyleSheet.create({
  page: (w, h) => ({
    width: w,
    height: h,
  }),
});
