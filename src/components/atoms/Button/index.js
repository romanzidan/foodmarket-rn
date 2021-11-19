import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Button = ({secondary, title, onPress}) => {
  return (
    <View style={styles.container(secondary)}>
      <Pressable
        android_ripple={{
          color: secondary ? '#494949' : '#C84902',
          borderless: false,
          radius: 100,
        }}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: secondary => ({
    backgroundColor: secondary ? '#8D92A3' : '#F87F3B',
    borderRadius: 8,
    overflow: 'hidden',
  }),
  text: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    padding: 15,
  },
});
