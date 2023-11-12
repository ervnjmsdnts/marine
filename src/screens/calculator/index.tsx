import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionButton from '../../components/action-button';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ForecastSchema } from './add-forecasting';
import { format } from 'date-fns';
import { ROIStackParamList } from '../../navigation/roi-stack';

export default function CalculatorScreen() {
  const navigation =
    useNavigation<NavigationProp<ROIStackParamList, 'Forecasting'>>();
  const route = useRoute<RouteProp<ROIStackParamList, 'Forecasting'>>();

  const [forecasts, setForecasts] = useState<
    (ForecastSchema & { id: number; date: string })[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('userForecasts')
      .then((dataString) => {
        if (dataString) {
          const parsedData = JSON.parse(dataString);
          setForecasts(parsedData);
        } else {
          console.log('No data found');
        }
      })
      .catch((error) => console.error('Error retrieving data: ', error));

    if (route && route.params) {
      const newData = route.params;
      setForecasts((prev) => [...prev, ...newData]);
    }

    setLoading(false);
  }, [route.params, route]);

  return (
    <>
      <SafeAreaView className='p-4 bg-slate-50 h-full'>
        <Text className='text-2xl font-bold mb-4'>ROI Forecastings</Text>
        {forecasts && forecasts.length > 0 ? (
          <View>
            {forecasts.map((forecast, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('SpecificForecast', forecast)
                }>
                <View className='bg-white mb-4 p-4 flex-row justify-between items-center'>
                  <Text className='text-lg font-semibold'>{forecast.name}</Text>
                  <Text className=''>
                    {format(new Date(forecast.date), 'PPp')}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : loading ? (
          <Text>Loading...</Text>
        ) : (
          <Text>No Forecasts</Text>
        )}
      </SafeAreaView>
      <ActionButton
        onPress={() => navigation.navigate('AddForecasting', forecasts)}
      />
    </>
  );
}
