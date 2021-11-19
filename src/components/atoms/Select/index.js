import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet, Text, View} from 'react-native';

const Select = ({label}) => {
  const [selectedCkity, setSelectedCity] = useState();
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={selectedCkity}
          onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}>
          <Picker.Item label="Banjarmasin" value="Banjarmasin" />
          <Picker.Item label="Banjarbaru" value="Banjarbaru" />
          <Picker.Item label="Amuntai" value="Amuntai" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

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
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});
