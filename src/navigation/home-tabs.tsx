import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Foundation, Feather, Ionicons } from '@expo/vector-icons';
import { StyledComponent } from 'nativewind';
import SettingsScreen from '../screens/settings';
import ROIStack from './roi-stack';
import HomeStack from './home-stack';
import DevelopersScreen from '../screens/developers';

export type TabParamList = {
  Home: undefined;
  Developers: undefined;
  Settings: undefined;
  Calculator: undefined;
};

export type TabProp = BottomTabNavigationProp<TabParamList>;

const Tab = createBottomTabNavigator<TabParamList>();

export default function HomeTabs() {
  return (
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
        component={HomeStack}
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
        name='Developers'
        component={DevelopersScreen}
        options={{
          title: 'Discover',
          tabBarIcon: ({ focused }) => (
            <StyledComponent
              component={Feather}
              name='users'
              size={32}
              className={`${focused ? 'text-blue-500' : 'text-slate-200'}`}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Calculator'
        component={ROIStack}
        options={{
          title: 'Calculator',
          tabBarIcon: ({ focused }) => (
            <StyledComponent
              component={Ionicons}
              name='calculator'
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
  );
}
