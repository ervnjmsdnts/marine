import { Controller, UseFormReturn, useFieldArray } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import Input from '../../../components/input';
import { ForecastSchema } from '.';
import { useColor } from '../../../contexts/color-context';

export default function ProductionCost({
  form,
}: {
  form: UseFormReturn<ForecastSchema>;
}) {
  const productionCostFieldArray = useFieldArray({
    name: 'productionCost',
    control: form.control,
  });

  const watchProdCostField = form.watch('productionCost');
  const controlledProdCostField = productionCostFieldArray.fields.map(
    (field, index) => {
      return {
        ...field,
        ...watchProdCostField[index],
      };
    },
  );

  const prodCosts = controlledProdCostField.reduce((acc, field) => {
    const itemCost = Number(field.quantity) * Number(field.price);
    return acc + itemCost;
  }, 0);
  const prodMisc = Number((prodCosts / 10).toFixed(2));
  const prodTotal = prodCosts + prodMisc;

  const { currentColor } = useColor();
  return (
    <View className='mb-4'>
      <Text className='text-lg font-semibold'>II. Production Cost</Text>
      {controlledProdCostField.map((product, index) => {
        const quantity = Number(product.quantity);
        const price = Number(product.price);

        const itemTotal = quantity * price;

        return (
          <View key={product.id} className='mb-2'>
            <Controller
              control={form.control}
              name={`productionCost.${index}.name`}
              render={({ field }) => (
                <Input
                  label='Name'
                  placeholder='Name'
                  value={field.value.toString()}
                  onChangeText={field.onChange}
                />
              )}
            />
            <View className='flex-row w-full'>
              <Controller
                control={form.control}
                name={`productionCost.${index}.quantity`}
                render={({ field }) => (
                  <Input
                    label='Quantity'
                    placeholder='Quantity'
                    keyboardType='numeric'
                    value={field.value ? field.value.toString() : ''}
                    onChangeText={(v) => {
                      form.setValue(
                        `productionCost.${index}.quantity`,
                        parseFloat(v),
                      );
                      field.onChange(parseFloat(v));
                    }}
                  />
                )}
              />
              <View className='w-1' />
              <Controller
                control={form.control}
                name={`productionCost.${index}.price`}
                render={({ field }) => (
                  <Input
                    label='Price'
                    placeholder='Price'
                    keyboardType='numeric'
                    value={field.value ? field.value.toString() : ''}
                    onChangeText={(v) => {
                      form.setValue(
                        `productionCost.${index}.price`,
                        parseFloat(v),
                      );
                      field.onChange(parseFloat(v));
                    }}
                  />
                )}
              />
              <View className='w-1' />
              <Input
                label='Total'
                value={itemTotal.toString()}
                editable={false}
              />
            </View>
          </View>
        );
      })}
      <View className='mt-2 w-full flex-row'>
        {productionCostFieldArray.fields.length > 1 ? (
          <TouchableOpacity
            onPress={() =>
              productionCostFieldArray.remove(
                productionCostFieldArray.fields.length - 1,
              )
            }
            className={`p-1 flex-1 ${currentColor.bg} rounded-lg`}>
            <Text className='text-white text-center'>Remove Item</Text>
          </TouchableOpacity>
        ) : null}
        <View className='w-1' />
        <TouchableOpacity
          onPress={() =>
            productionCostFieldArray.append({
              name: '',
              price: 0,
              quantity: 0,
            })
          }
          className={`p-1 flex-1 ${currentColor.bg} rounded-lg`}>
          <Text className='text-white text-center'>Add Item</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text className='text-right font-semibold'>
          Production Costs: {'\u20B1'}
          {prodCosts}
        </Text>
        <Text className='text-right font-semibold'>
          Misc(10%): {'\u20B1'}
          {prodMisc}
        </Text>
        <Text className='text-right font-semibold'>
          Total Production Cost: {'\u20B1'}
          {prodTotal}
        </Text>
      </View>
    </View>
  );
}
