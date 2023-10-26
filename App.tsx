import {
  CompositeNavigationProp,
  NavigationContainer,
} from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeTabs, { TabParamList } from './src/navigation/home-tabs';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import TilapiaSpecies from './src/screens/species/tilapia';
import MilkFishSpecies from './src/screens/species/milk-fish';
import ShrimpSpecies from './src/screens/species/shrimp';
import SeaweedSpecies from './src/screens/species/seaweed';

export type StackParamList = {
  HomeTabs: undefined;
  TilapiaSpecies: undefined;
  MilkFishSpecies: undefined;
  ShrimpSpecies: undefined;
  SeaweedSpecies: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export type RootScreenComposite = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList>,
  StackNavigationProp<StackParamList>
>;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='HomeTabs' component={HomeTabs} />
        <Stack.Screen name='TilapiaSpecies' component={TilapiaSpecies} />
        <Stack.Screen name='MilkFishSpecies' component={MilkFishSpecies} />
        <Stack.Screen name='ShrimpSpecies' component={ShrimpSpecies} />
        <Stack.Screen name='SeaweedSpecies' component={SeaweedSpecies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
