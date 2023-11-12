import {
  StackScreenProps,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeTabs from './home-tabs';
import LandingScreen from '../screens/landing';

export type LandingStackParamList = {
  Landing: undefined;
  HomeTabs: undefined;
};

const LandingStackNav = createStackNavigator<LandingStackParamList>();

export default function LandingStack() {
  return (
    <LandingStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <LandingStackNav.Screen name='Landing' component={LandingScreen} />
      <LandingStackNav.Screen name='HomeTabs' component={HomeTabs} />
    </LandingStackNav.Navigator>
  );
}
