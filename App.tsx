import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingStack from './src/navigation/landing-stack';

export type StackParamList = {
  LandingStack: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='LandingStack' component={LandingStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
