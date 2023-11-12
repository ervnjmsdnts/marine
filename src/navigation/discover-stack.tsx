import { createStackNavigator } from '@react-navigation/stack';
import DiscoverScreen from '../screens/discover';
import TilapiaSpecies from '../screens/species/tilapia';
import MilkFishSpecies from '../screens/species/milk-fish';
import ShrimpSpecies from '../screens/species/shrimp';
import SeaWeedSpecies from '../screens/species/seaweed';
import TilapiaBreedsStack from './tilapia-stack';

export type DiscoverStackParamList = {
  DiscoverMain: undefined;
  Tilapia: undefined;
  MilkFish: undefined;
  Shrimp: undefined;
  Seaweed: undefined;
};

const DisocoverStackNav = createStackNavigator<DiscoverStackParamList>();

export default function DiscoverStack() {
  return (
    <DisocoverStackNav.Navigator screenOptions={{ headerShown: false }}>
      <DisocoverStackNav.Screen
        name='DiscoverMain'
        component={DiscoverScreen}
      />
      <DisocoverStackNav.Screen name='Tilapia' component={TilapiaBreedsStack} />
      <DisocoverStackNav.Screen name='MilkFish' component={MilkFishSpecies} />
      <DisocoverStackNav.Screen name='Shrimp' component={ShrimpSpecies} />
      <DisocoverStackNav.Screen name='Seaweed' component={SeaWeedSpecies} />
    </DisocoverStackNav.Navigator>
  );
}
