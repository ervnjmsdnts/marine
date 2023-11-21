import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ScrollView } from 'react-native-gesture-handler';
import ProductionCost from './production-cost';
import DevelopmentCost from './development-cost';
import CostReturnAnalysis from './cost-return-analysis';
import Input from '../../../components/input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackScreenProps } from '@react-navigation/stack';
import NavigateBack from '../../../components/navigate-back';
import { ROIStackParamList } from '../../../navigation/roi-stack';
import { useColor } from '../../../contexts/color-context';

const schema = z.object({
  name: z.string(),
  developmentCost: z.array(
    z.object({
      name: z.string(),
      quantity: z.number(),
      price: z.number(),
    }),
  ),
  depreciationCost: z.object({
    projectLife: z.number(),
    cropsyear: z.number(),
  }),
  productionCost: z.array(
    z.object({
      name: z.string(),
      quantity: z.number(),
      price: z.number(),
    }),
  ),
  productionAnalysis: z.object({
    stockDensity: z.number(),
    survivalRate: z.number(),
    averageBodyWeight: z.number(),
  }),
  grossSales: z.object({ sellingPrice: z.number() }),
});

export type ForecastSchema = z.infer<typeof schema>;

export default function AddForecastingScreen({
  route,
  navigation,
}: StackScreenProps<ROIStackParamList, 'AddForecasting'>) {
  const forecasts = route.params;
  const form = useForm<ForecastSchema>({
    defaultValues: {
      developmentCost: [{ name: '', price: 0, quantity: 0 }],
      depreciationCost: { projectLife: 0, cropsyear: 0 },
      productionCost: [{ name: '', price: 0, quantity: 0 }],
      productionAnalysis: {
        averageBodyWeight: 0,
        stockDensity: 0,
        survivalRate: 0,
      },
      grossSales: { sellingPrice: 0 },
    },
    resolver: zodResolver(schema),
  });

  const watchProdCostField = form.watch('productionCost');
  const prodCosts = watchProdCostField.reduce((acc, field) => {
    const itemCost = Number(field.quantity) * Number(field.price);
    return acc + itemCost;
  }, 0);
  const prodMisc = Number((prodCosts / 10).toFixed(2));
  const prodTotal = prodCosts + prodMisc;

  const watchDevCostField = form.watch('developmentCost');
  const devCosts = watchDevCostField.reduce((acc, field) => {
    const itemCost = Number(field.quantity) * Number(field.price);
    return acc + itemCost;
  }, 0);
  const devContingency = Number((devCosts / 10).toFixed(2));
  const devTotal = devCosts + devContingency;

  const projectLife = form.watch('depreciationCost.projectLife');
  const cropsyear = form.watch('depreciationCost.cropsyear');

  const depCost = Number(projectLife) * Number(cropsyear);
  const depTotal = depCost ? Number((devTotal / depCost).toFixed(2)) : 0;

  const addNewForecast = async (data: ForecastSchema) => {
    try {
      const updatedData = [
        ...forecasts,
        { ...data, id: Date.now(), date: new Date().toString() },
      ];

      await AsyncStorage.setItem('userForecasts', JSON.stringify(updatedData));
      navigation.navigate('Forecasting', updatedData);
    } catch (error) {
      console.error('Error adding: ', error);
    }
  };

  const { currentColor } = useColor();

  return (
    <SafeAreaView className='bg-slate-50 flex-1 h-full p-4'>
      <NavigateBack title='Add ROI Forecast' />
      <ScrollView>
        <Controller
          control={form.control}
          name='name'
          render={({ field }) => (
            <Input
              label='Forecast Name'
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        <DevelopmentCost form={form} />
        <ProductionCost form={form} />
        <CostReturnAnalysis
          form={form}
          depTotal={depTotal}
          prodTotal={prodTotal}
          devTotal={devTotal}
        />
      </ScrollView>
      <View>
        <TouchableOpacity
          className={`p-2 rounded-md ${currentColor.bg}`}
          onPress={form.handleSubmit(addNewForecast)}>
          <Text className='text-white text-center'>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
