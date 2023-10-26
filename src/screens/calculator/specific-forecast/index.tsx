import { StackScreenProps } from '@react-navigation/stack';
import { ROIStackParamList } from '../../../navigation/home-tabs';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigateBack from '../../../components/navigate-back';

export default function SpecificForecast({
  route,
}: StackScreenProps<ROIStackParamList, 'SpecificForecast'>) {
  const forecast = route.params;

  const devCost = forecast.developmentCost.reduce((acc, field) => {
    const itemCost = field.quantity * field.price;
    return acc + itemCost;
  }, 0);
  const devCont = Number((devCost / 10).toFixed(2));
  const totalDev = devCost + devCont;

  const depCost =
    Number(forecast.depreciationCost.projectLife) *
    Number(forecast.depreciationCost.cropsyear);
  const totalDep = depCost ? Number((totalDev / depCost).toFixed(2)) : 0;

  const prodCost = forecast.productionCost.reduce((acc, field) => {
    const itemCost = field.quantity * field.price;
    return acc + itemCost;
  }, 0);
  const prodMisc = Number((prodCost / 10).toFixed(2));
  const totalProdCost = prodCost + prodMisc;

  const totalProdKilo = Number(
    (
      (forecast.productionAnalysis.stockDensity *
        (forecast.productionAnalysis.survivalRate / 100) *
        forecast.productionAnalysis.averageBodyWeight) /
      1000
    ).toFixed(2),
  );

  const totalGross = totalProdKilo * forecast.grossSales.sellingPrice;

  const prodPlusDep = totalProdCost + totalDep;

  const netIncome = totalGross - prodPlusDep;
  const tax = Number((netIncome / 10).toFixed(2));
  const totalNet = netIncome - tax;

  const totalROI = Number(((totalNet / prodPlusDep) * 1.0 * 100).toFixed(2));

  const netX2 = totalNet * 2;

  const years = (totalDev / netX2).toFixed(2);

  return (
    <SafeAreaView className='bg-slate-50 flex-1 p-4'>
      <NavigateBack title={forecast.name} />
      <ScrollView>
        <View className='mt-4'>
          <Text className='text-lg font-semibold'>I. Development Cost</Text>
          <View>
            <View className='flex-row'>
              <Text className='font-medium flex-1'>Item</Text>
              <Text className='font-medium flex-1'>Quantity</Text>
              <Text className='font-medium flex-1'>Price</Text>
            </View>
            {forecast.developmentCost.map((dev, index) => (
              <View className='flex-row' key={index}>
                <Text className='flex-1'>{dev.name}</Text>
                <Text className='flex-1'>{dev.quantity}</Text>
                <Text className='flex-1'>
                  {'\u20B1'}
                  {dev.price}
                </Text>
              </View>
            ))}
            <View className='mt-2'>
              <Text className='font-medium'>
                Development Cost:{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {devCost}
                </Text>{' '}
              </Text>
              <Text className='font-medium'>
                Contingency(10%):{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {devCont}
                </Text>{' '}
              </Text>
              <Text className='font-medium'>
                Total Development Cost:{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {totalDev}
                </Text>{' '}
              </Text>
            </View>
          </View>

          <View className='mt-2'>
            <Text className='text-lg font-semibold'>Depreciation Cost</Text>
            <View>
              <Text className='font-medium'>
                Project Life:{' '}
                <Text className='font-normal'>
                  {forecast.depreciationCost.projectLife}
                </Text>
              </Text>
              <Text className='font-medium'>
                Crops/Year:{' '}
                <Text className='font-normal'>
                  {forecast.depreciationCost.cropsyear}
                </Text>
              </Text>
              <Text className='font-medium'>
                Total Depreciation Cost:{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {totalDep}
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View className='mt-4'>
          <Text className='text-lg font-semibold'>II. Production Cost</Text>
          <View>
            <View className='flex-row'>
              <Text className='font-medium flex-1'>Item</Text>
              <Text className='font-medium flex-1'>Quantity</Text>
              <Text className='font-medium flex-1'>Price</Text>
            </View>
            {forecast.productionCost.map((dev, index) => (
              <View className='flex-row' key={index}>
                <Text className='flex-1'>{dev.name}</Text>
                <Text className='flex-1'>{dev.quantity}</Text>
                <Text className='flex-1'>
                  {'\u20B1'}
                  {dev.price}
                </Text>
              </View>
            ))}
            <View className='mt-2'>
              <Text className='font-medium'>
                Production Cost:{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {prodCost}
                </Text>{' '}
              </Text>
              <Text className='font-medium'>
                Misc(10%):{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {prodMisc}
                </Text>{' '}
              </Text>
              <Text className='font-medium'>
                Total Production Cost:{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {totalProdCost}
                </Text>{' '}
              </Text>
            </View>
          </View>
        </View>
        <View className='mt-4'>
          <Text className='text-lg font-semibold'>
            III. Cost/Return Analysis
          </Text>

          <View className='mt-2'>
            <Text className='text-lg font-semibold'>A. Production</Text>
            <View>
              <Text className='font-medium'>
                Stocking Density:{' '}
                <Text className='font-normal'>
                  {forecast.productionAnalysis.stockDensity}
                </Text>
              </Text>
              <Text className='font-medium'>
                Survival Rate:{' '}
                <Text className='font-normal'>
                  {forecast.productionAnalysis.survivalRate}
                </Text>
              </Text>
              <Text className='font-medium'>
                Average Body Weight:{' '}
                <Text className='font-normal'>
                  {forecast.productionAnalysis.averageBodyWeight}
                </Text>
              </Text>
              <Text className='font-medium'>
                Total Production:{' '}
                <Text className='font-normal'>{totalProdKilo}/kg</Text>
              </Text>
            </View>
          </View>
          <View className='mt-2'>
            <Text className='text-lg font-semibold'>B. Gross Sales</Text>
            <View>
              <Text className='font-medium'>
                Total Production:{' '}
                <Text className='font-normal'>{totalProdKilo}/kg</Text>
              </Text>
              <Text className='font-medium'>
                Selling Price:{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {forecast.grossSales.sellingPrice}
                </Text>
              </Text>
              <Text className='font-medium'>
                Total Gross Sales:{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {totalGross}
                </Text>
              </Text>
            </View>
          </View>
          <View className='mt-2'>
            <Text className='text-lg font-semibold'>C. Net Income</Text>
            <View>
              <Text className='font-medium'>
                Total Gross Sales:{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {totalGross}
                </Text>
              </Text>
              <Text className='font-medium'>
                Total Production Cost:{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {totalProdCost}
                </Text>
              </Text>
              <Text className='font-medium'>
                Total Depreciation Cost:{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {totalDep}
                </Text>
              </Text>
              <Text className='font-medium'>
                Production + Depreciation:{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {prodPlusDep}
                </Text>
              </Text>
              <Text className='font-medium'>
                Net Income:{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {netIncome}
                </Text>
              </Text>
              <Text className='font-medium'>
                Tax(10%):{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {tax}
                </Text>
              </Text>
              <Text className='font-medium'>
                Total Net Income:{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {totalNet}
                </Text>
              </Text>
            </View>
          </View>
          <View className='mt-2'>
            <Text className='text-lg font-semibold'>
              D. Return of Investment
            </Text>
            <View>
              <Text className='font-medium'>
                Total Net Income:{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {totalNet}
                </Text>
              </Text>
              <Text className='font-medium'>
                Production + Depreciation:{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {prodPlusDep}
                </Text>
              </Text>
              <Text className='font-medium'>
                Total Percentage of ROI:{' '}
                <Text className='font-normal'>{totalROI}%</Text>
              </Text>
            </View>
          </View>
          <View className='mt-2'>
            <Text className='text-lg font-semibold'>E. Payback Period</Text>
            <View>
              <Text className='font-medium'>
                Total Development Cost:{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {totalDev}
                </Text>
              </Text>
              <Text className='font-medium'>
                Total Net Income * 2:{' '}
                <Text className='font-normal'>
                  {'\u20B1'}
                  {netX2}
                </Text>
              </Text>
              <Text className='font-medium'>
                Years: <Text className='font-normal'>{years}</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
