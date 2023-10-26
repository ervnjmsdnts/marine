import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ScrollView } from 'react-native-gesture-handler';
import ProductionCost from './production-cost';
import DevelopmentCost from './development-cost';
import CostReturnAnalysis from './cost-return-analysis';

const schema = z.object({
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
  grossSales: z.object({ kiloOfProd: z.number(), price: z.number() }),
});

export type ForecastSchema = z.infer<typeof schema>;

export default function AddForeCastingScreen() {
  const form = useForm<ForecastSchema>({
    defaultValues: {
      developmentCost: [{ name: '', price: 0, quantity: 0 }],
      depreciationCost: { projectLife: 0, cropsyear: 0 },
      productionCost: [{ name: '', price: 0, quantity: 0 }],
    },
    resolver: zodResolver(schema),
  });

  return (
    <SafeAreaView className='bg-slate-50 flex-1 h-full p-4'>
      <Text className='text-lg font-bold mb-4'>Add ROI Forecasting</Text>
      <ScrollView>
        <DevelopmentCost form={form} />
        <ProductionCost form={form} />
        <CostReturnAnalysis form={form} />
      </ScrollView>
      <View>
        <TouchableOpacity className='p-2 bg-blue-500 rounded-md'>
          <Text className='text-white text-center'>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
