import { Controller, UseFormReturn } from 'react-hook-form';
import { ForecastSchema } from '.';
import { Text, View } from 'react-native';
import Input from '../../../components/input';

export default function CostReturnAnalysis({
  form,
  prodTotal,
  depTotal,
  devTotal,
}: {
  form: UseFormReturn<ForecastSchema>;
  prodTotal: number;
  depTotal: number;
  devTotal: number;
}) {
  const density = form.watch('productionAnalysis.stockDensity');
  const surivalRate = form.watch('productionAnalysis.survivalRate');
  const bodyWeight = form.watch('productionAnalysis.averageBodyWeight');

  const totalProdAnalysis =
    density && surivalRate && bodyWeight
      ? (density * (surivalRate / 100) * bodyWeight) / 1000
      : 0;

  const sellingPrice = form.watch('grossSales.sellingPrice');

  const totalGrossSales =
    totalProdAnalysis && sellingPrice ? totalProdAnalysis * sellingPrice : 0;

  const netIncome =
    totalGrossSales && prodTotal && depTotal
      ? totalGrossSales - (prodTotal + depTotal)
      : 0;
  const netTax = netIncome ? Number((netIncome / 10).toFixed(2)) : 0;
  const totalNetIncome = netTax && netIncome ? netIncome - netTax : 0;

  const prodDepTotal = prodTotal && depTotal ? prodTotal + depTotal : 0;

  const totalROIPerc =
    totalNetIncome && prodDepTotal
      ? (totalNetIncome / prodDepTotal) * 1.0 * 100
      : 0;

  const netIncomeX2 = totalNetIncome ? totalNetIncome * 2 : 0;

  const paybackPeriod =
    devTotal && netIncomeX2 ? Number((devTotal / netIncomeX2).toFixed(2)) : 0;

  return (
    <View className='mb-4'>
      <Text className='text-lg font-semibold'>III. Cost/Return Analysis</Text>
      {/* Production Analysis */}
      <View className='mb-2'>
        <Text className='font-semibold text-lg'>A. Production</Text>
        <View className='flex-row'>
          <Controller
            control={form.control}
            name='productionAnalysis.stockDensity'
            render={({ field }) => (
              <Input
                label='Stock Density'
                placeholder='Quantity'
                keyboardType='numeric'
                value={field.value.toString()}
                onChangeText={field.onChange}
              />
            )}
          />
          <View className='w-1' />
          <Controller
            control={form.control}
            name='productionAnalysis.survivalRate'
            render={({ field }) => (
              <Input
                label='Survival Rate %'
                placeholder='Price'
                keyboardType='numeric'
                value={field.value.toString()}
                onChangeText={field.onChange}
              />
            )}
          />
          <View className='w-1' />
          <Controller
            control={form.control}
            name='productionAnalysis.averageBodyWeight'
            render={({ field }) => (
              <Input
                label='Avg. Weight'
                placeholder='Price'
                keyboardType='numeric'
                value={field.value.toString()}
                onChangeText={field.onChange}
              />
            )}
          />
        </View>
        <View>
          <Text className='text-right font-semibold'>
            Total Production: {totalProdAnalysis}/kg
          </Text>
        </View>
      </View>
      {/* Gross Sales */}
      <View className='mb-2'>
        <Text className='text-lg font-semibold'>B. Gross Sales</Text>
        <View className='flex-row'>
          <Input
            className='flex-1'
            label='Kilo Of Production'
            value={totalProdAnalysis.toString()}
            editable={false}
          />
          <View className='w-1' />
          <Controller
            control={form.control}
            name='grossSales.sellingPrice'
            render={({ field }) => {
              return (
                <Input
                  label='Selling Price'
                  value={field.value.toString()}
                  keyboardType='numeric'
                  onChangeText={field.onChange}
                  className='flex-1'
                />
              );
            }}
          />
        </View>
        <View>
          <Text className='text-right font-semibold'>
            Total Gross Sales: {'\u20B1'}
            {totalGrossSales}
          </Text>
        </View>
      </View>
      <View className='mb-2'>
        <Text className='text-lg font-semibold'>C. Net Income</Text>
        <View className='flex-row'>
          <Input
            label='Gross Total'
            editable={false}
            value={totalGrossSales.toString()}
          />
          <View className='w-1' />
          <Input
            label='Prod. Total'
            editable={false}
            value={prodTotal.toString()}
          />
          <View className='w-1' />
          <Input
            label='Depre. Total'
            editable={false}
            value={depTotal.toString()}
          />
        </View>
        <View>
          <Text className='text-right font-semibold'>
            Net Income: {'\u20B1'}
            {netIncome}
          </Text>
          <Text className='text-right font-semibold'>
            Tax(10%): {'\u20B1'}
            {netTax}
          </Text>
          <Text className='text-right font-semibold'>
            Total Net Income: {'\u20B1'}
            {totalNetIncome}
          </Text>
        </View>
      </View>
      <View className='mb-2'>
        <Text className='text-lg font-semibold'>D. Return of Investment</Text>
        <View className='flex-row'>
          <Input
            label='Net Income'
            editable={false}
            value={totalNetIncome.toString()}
          />
          <View className='w-1' />
          <Input
            label='Prod & Dep Total'
            editable={false}
            value={prodDepTotal.toString()}
          />
        </View>
        <View>
          <Text className='text-right font-semibold'>
            Total percentage of ROI: {totalROIPerc.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View>
        <Text className='text-lg font-semibold'>E. Payback Period</Text>
        <View className='flex-row'>
          <Input
            label='Development Cost'
            editable={false}
            value={devTotal.toString()}
          />
          <View className='w-1' />
          <Input
            label='Net Income * 2'
            editable={false}
            value={netIncomeX2.toString()}
          />
        </View>
        <View>
          <Text className='text-right font-semibold'>
            Years: {paybackPeriod}
          </Text>
        </View>
      </View>
    </View>
  );
}
