import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';

const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderRadius: 8,
    padding: 13,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});
