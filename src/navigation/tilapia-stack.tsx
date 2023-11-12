import { createStackNavigator } from '@react-navigation/stack';
import TilapiaSpecies from '../screens/species/tilapia';
import TilapiaBreed from '../screens/species/tilapia/breed';

export type TilapiaStackParamsList = {
  TilapiaSpecies: undefined;
  Nilotica: { content: string[]; image: any };
  Mossambica: { content: string[]; image: any };
  Aureus: { content: string[]; image: any };
  Zili: { content: string[]; image: any };
};

const TilapiaBreedsStackNav = createStackNavigator<TilapiaStackParamsList>();

export default function TilapiaBreedsStack() {
  return (
    <TilapiaBreedsStackNav.Navigator screenOptions={{ headerShown: false }}>
      <TilapiaBreedsStackNav.Screen
        name='TilapiaSpecies'
        component={TilapiaSpecies}
      />
      <TilapiaBreedsStackNav.Screen name='Nilotica' component={TilapiaBreed} />
      <TilapiaBreedsStackNav.Screen
        name='Mossambica'
        component={TilapiaBreed}
      />
      <TilapiaBreedsStackNav.Screen name='Aureus' component={TilapiaBreed} />
      <TilapiaBreedsStackNav.Screen name='Zili' component={TilapiaBreed} />
    </TilapiaBreedsStackNav.Navigator>
  );
}
