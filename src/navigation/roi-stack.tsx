import { createStackNavigator } from '@react-navigation/stack';
import AddForecastingScreen, {
  ForecastSchema,
} from '../screens/calculator/add-forecasting';
import CalculatorScreen from '../screens/calculator';
import SpecificForecast from '../screens/calculator/specific-forecast';

export type ROIStackParamList = {
  Forecasting: (ForecastSchema & { id: number; date: string })[] | undefined;
  AddForecasting: (ForecastSchema & { id: number; date: string })[];
  SpecificForecast: ForecastSchema & { id: number; date: string };
};

const ROIStackNav = createStackNavigator<ROIStackParamList>();

export default function ROIStack() {
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
