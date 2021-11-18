import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Header, TextInput, Gap} from '../../components';

export default function SignIn() {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TextInput
            label="Email Address"
            placeholder="Type your email address"
          />
          <Gap h={16} />
          <TextInput label="Password" placeholder="Type your password" />
          <Gap h={24} />
          <Button title="Sign In" />
          <Gap h={12} />
          <Button title="Create New Account" secondary />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 26,
    flex: 1,
  },
});
