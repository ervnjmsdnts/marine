import {
  CompositeNavigationProp,
  NavigationContainer,
} from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeTabs, { TabParamList } from './src/navigation/home-tabs';
import SpeciesScreen from './src/screens/species';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type StackParamList = {
  HomeTabs: undefined;
  Species: { data: string };
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
        <Stack.Screen name='Species' component={SpeciesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
