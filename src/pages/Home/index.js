import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {DummyFood1, DummyFood2, DummyProfile} from '../../assets';
import {FoodCard, Gap} from '../../components';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const renderTabBar = props => (
  <TabBar
    {...props}
    pressColor="#ECECEC"
    indicatorStyle={styles.indicatorStyle}
    style={{backgroundColor: '#ffffff', paddingHorizontal: 14}}
    tabStyle={{width: 'auto', paddingHorizontal: 15}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontSize: 14,
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const FirstRoute = () => (
  <View style={{flex: 1, backgroundColor: '#ff4081'}}>
    <Text>Anjay</Text>
  </View>
);
const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}}>
    <Text>Anjay</Text>
  </View>
);

const renderScene = SceneMap({
  1: FirstRoute,
  2: SecondRoute,
  3: FirstRoute,
});

const Home = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recomended'},
  ]);

  return (
    <View style={styles.page}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>FoodMarket</Text>
          <Text style={styles.desc}>Let’s get some foods</Text>
        </View>
        <Image source={DummyProfile} style={styles.profile} />
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <Gap w={24} />
            <FoodCard image={DummyFood1} name="Cherry Healthy" />
            <FoodCard image={DummyFood2} name="Burger Tamayo" />
            <FoodCard image={DummyFood1} name="Cherry Healthy" />
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FAFAFC',
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingTop: 30,
    backgroundColor: '#ffffff',
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    marginTop: -5,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  foodCardContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  tabContainer: {
    flex: 1,
  },
  indicatorStyle: {
    backgroundColor: '#020202',
    height: 3,
    width: 0.7,
    marginLeft: 10,
    marginRight: -10,
  },
});
