import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabs from './src/navigation/home-tabs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='HomeTabs' component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
