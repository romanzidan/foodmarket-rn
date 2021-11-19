import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Gap, Header, TextInput, Button, Select} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        onBack
        title="Address"
        subTitle="Make sure it’s valid"
        onPress={() => navigation.goBack()}
      />

      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TextInput label="Phone No." placeholder="Type your phone number" />
          <Gap h={16} />
          <TextInput label="Address" placeholder="Type your address" />
          <Gap h={16} />
          <TextInput label="House No." placeholder="Type your house number" />
          <Gap h={16} />
          <Select label="City" />
          <Gap h={24} />
          <Button title="Sign Up Now" />
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 26,
  },
});
