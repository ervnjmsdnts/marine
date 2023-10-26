import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Foundation, Feather, Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/home';
import { StyledComponent } from 'nativewind';
import SettingsScreen from '../screens/settings';
import DiscoverScreen from '../screens/discover';
import CalculatorScreen from '../screens/calculator';
import { createStackNavigator } from '@react-navigation/stack';
import AddForecastingScreen, {
  ForecastSchema,
} from '../screens/calculator/add-forecasting';
import SpecificForecast from '../screens/calculator/specific-forecast';

export type TabParamList = {
  Home: undefined;
  Discover: undefined;
  Settings: undefined;
  Calculator: undefined;
};

export type TabProp = BottomTabNavigationProp<TabParamList>;

const Tab = createBottomTabNavigator<TabParamList>();

export type ROIStackParamList = {
  Forecasting: (ForecastSchema & { id: number; date: string })[] | undefined;
  AddForecasting: (ForecastSchema & { id: number; date: string })[];
  SpecificForecast: ForecastSchema & { id: number; date: string };
};

const ROIStackNav = createStackNavigator<ROIStackParamList>();

function ROIStack() {
  return (
    <ROIStackNav.Navigator screenOptions={{ headerShown: false }}>
      <ROIStackNav.Screen name='Forecasting' component={CalculatorScreen} />
      <ROIStackNav.Screen
        name='AddForecasting'
        component={AddForecastingScreen}
      />
      <ROIStackNav.Screen
        name='SpecificForecast'
        component={SpecificForecast}
      />
    </ROIStackNav.Navigator>
  );
}

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
    </>
  );
}
