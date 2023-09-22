import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Foundation, Feather } from '@expo/vector-icons';
import HomeScreen from '../screens/home';
import { StyledComponent } from 'nativewind';
import SettingsScreen from '../screens/settings';
import DiscoverScreen from '../screens/discover';

export type TabParamList = {
  Home: undefined;
  Discover: undefined;
  Settings: undefined;
};

export type TabProp = BottomTabNavigationProp<TabParamList>;

const Tab = createBottomTabNavigator<TabParamList>();

export default function HomeTabs() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            elevation: 0,
            borderColor: 'white',
            height: 64,
          },
        }}>
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ focused }) => (
              <StyledComponent
                component={Foundation}
                name='home'
                size={32}
                className={`${focused ? 'text-blue-500' : 'text-slate-200'}`}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Discover'
          component={DiscoverScreen}
          options={{
            title: 'Discover',
            tabBarIcon: ({ focused }) => (
              <StyledComponent
                component={Feather}
                name='globe'
                size={32}
                className={`${focused ? 'text-blue-500' : 'text-slate-200'}`}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Settings'
          component={SettingsScreen}
          options={{
            title: 'Settings',
            tabBarIcon: ({ focused }) => (
              <StyledComponent
                component={Foundation}
                name='widget'
                size={32}
                className={`${focused ? 'text-blue-500' : 'text-slate-200'}`}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
