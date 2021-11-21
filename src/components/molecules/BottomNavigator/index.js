import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  IcHome,
  IcHomeOff,
  IcOrder,
  IcOrderOff,
  IcProfile,
  IcProfileOff,
} from '../../../assets';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <IcHome /> : <IcHomeOff />;
    case 'Order':
      return focus ? <IcOrder /> : <IcOrderOff />;
    case 'Profile':
      return focus ? <IcProfile /> : <IcProfileOff />;
    default:
      return <IcHome />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <View style={styles.btnContainer}>
            <Pressable
              style={styles.btnTab}
              android_ripple={{color: '#FFC7A7', borderless: false, radius: 50}}
              key={index}
              onPress={onPress}
              onLongPress={onLongPress}>
              <Icon label={label} focus={isFocused} />
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTab: {
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 55,
  },
});
