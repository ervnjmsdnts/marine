import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import DiscoverStack from './discover-stack';

export type HomeStackParamsList = {
  HomeMain: undefined;
  DiscoverStack: undefined;
};

const HomeStackNav = createStackNavigator<HomeStackParamsList>();

export default function HomeStack() {
  return (
    <HomeStackNav.Navigator screenOptions={{ headerShown: false }}>
      <HomeStackNav.Screen name='HomeMain' component={HomeScreen} />
      <HomeStackNav.Screen name='DiscoverStack' component={DiscoverStack} />
    </HomeStackNav.Navigator>
  );
}
