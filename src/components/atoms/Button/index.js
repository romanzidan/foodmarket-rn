import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({secondary, title}) => {
  return (
    <View style={styles.container(secondary)}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: secondary => ({
    backgroundColor: secondary ? '#8D92A3' : '#F87F3B',
    padding: 15,
    borderRadius: 8,
  }),
  text: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});
