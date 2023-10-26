import { UseFormReturn } from 'react-hook-form';
import { ForecastSchema } from '.';
import { Text, View } from 'react-native';

export default function CostReturnAnalysis({
  form,
}: {
  form: UseFormReturn<ForecastSchema>;
}) {
  return (
    <View className='mb-4'>
      <Text className='text-lg font-semibold'>III. Cost/Return Analysis</Text>
    </View>
  );
}
