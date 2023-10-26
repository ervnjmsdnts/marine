import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionButton from '../../components/action-button';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ROIStackParamList } from '../../navigation/home-tabs';

export default function CalculatorScreen() {
  const navigation = useNavigation<NavigationProp<ROIStackParamList>>();
  return (
    <>
      <SafeAreaView className='p-4 bg-slate-50 h-full'>
        <Text className='text-2xl font-bold mb-4'>ROI Forecastings</Text>
      </SafeAreaView>
      <ActionButton onPress={() => navigation.navigate('AddForecasting')} />
    </>
  );
}
