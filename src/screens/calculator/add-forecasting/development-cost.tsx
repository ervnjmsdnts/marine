import { Controller, UseFormReturn, useFieldArray } from 'react-hook-form';
import { ForecastSchema } from '.';
import { Text, TouchableOpacity, View } from 'react-native';
import Input from '../../../components/input';
import { useColor } from '../../../contexts/color-context';

export default function DevelopmentCost({
  form,
}: {
  form: UseFormReturn<ForecastSchema>;
}) {
  const developmentCostFieldArray = useFieldArray({
    name: 'developmentCost',
    control: form.control,
  });

  const watchDevCostField = form.watch('developmentCost');
  const controlledDevCostField = developmentCostFieldArray.fields.map(
    (field, index) => {
      return {
        ...field,
        ...watchDevCostField[index],
      };
    },
  );

  const devCosts = controlledDevCostField.reduce((acc, field) => {
    const itemCost = Number(field.quantity) * Number(field.price);
    return acc + itemCost;
  }, 0);
  const devContingency = Number((devCosts / 10).toFixed(2));
  const devTotal = devCosts + devContingency;

  const projectLife = form.watch('depreciationCost.projectLife');
  const cropsyear = form.watch('depreciationCost.cropsyear');

  const depCost = Number(projectLife) * Number(cropsyear);
  const depTotal = depCost ? Number((devTotal / depCost).toFixed(2)) : 0;

  const { currentColor } = useColor();

  return (
    <View className='mb-4'>
      <Text className='text-lg font-semibold'>I. Development Cost</Text>
      {controlledDevCostField.map((dev, index) => {
        const quantity = Number(dev.quantity);
        const price = Number(dev.price);

        const itemTotal = quantity * price;
        return (
          <View key={dev.id} className='mb-2'>
            <Controller
              control={form.control}
              name={`developmentCost.${index}.name`}
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
                name={`developmentCost.${index}.quantity`}
                render={({ field }) => (
                  <Input
                    label='Quantity'
                    placeholder='Quantity'
                    keyboardType='numeric'
                    value={field.value ? field.value.toString() : ''}
                    onChangeText={(v) => {
                      form.setValue(
                        `developmentCost.${index}.quantity`,
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
                name={`developmentCost.${index}.price`}
                render={({ field }) => (
                  <Input
                    label='Price'
                    placeholder='Price'
                    keyboardType='numeric'
                    value={field.value ? field.value.toString() : ''}
                    onChangeText={(v) => {
                      form.setValue(
                        `developmentCost.${index}.price`,
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
        {developmentCostFieldArray.fields.length > 1 ? (
          <TouchableOpacity
            onPress={() =>
              developmentCostFieldArray.remove(
                developmentCostFieldArray.fields.length - 1,
              )
            }
            className={`p-1 flex-1 ${currentColor.bg} rounded-lg`}>
            <Text className='text-white text-center'>Remove Item</Text>
          </TouchableOpacity>
        ) : null}
        <View className='w-1' />
        <TouchableOpacity
          onPress={() =>
            developmentCostFieldArray.append({
              name: '',
              price: 0,
              quantity: 0,
            })
          }
          className={`p-1 flex-1 ${currentColor.bg} rounded-lg`}>
          <Text className='text-white text-center'>Add Item</Text>
        </TouchableOpacity>
      </View>
      <View className='mb-2'>
        <Text className='text-right font-semibold'>
          Development Costs: {'\u20B1'}
          {devCosts}
        </Text>
        <Text className='text-right font-semibold'>
          Contingency(10%): {'\u20B1'}
          {devContingency}
        </Text>
        <Text className='text-right font-semibold'>
          Total Development Cost: {'\u20B1'}
          {devTotal}
        </Text>
      </View>
      <View>
        <Text className='font-semibold text-lg'>Depreciation Cost</Text>
        <View>
          <Input
            label='Development Cost Total'
            value={devCosts.toString()}
            editable={false}
          />
          <View className='flex-row w-full'>
            <Controller
              control={form.control}
              name='depreciationCost.projectLife'
              render={({ field }) => (
                <Input
                  label='Project Life'
                  placeholder='Project Life'
                  keyboardType='numeric'
                  value={field.value ? field.value.toString() : ''}
                  onChangeText={(v) => {
                    form.setValue(
                      'depreciationCost.projectLife',
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
              name='depreciationCost.cropsyear'
              render={({ field }) => (
                <Input
                  label='Crops/Year'
                  placeholder='Crops/Year'
                  keyboardType='numeric'
                  value={field.value ? field.value.toString() : ''}
                  onChangeText={(v) => {
                    form.setValue('depreciationCost.cropsyear', parseFloat(v));
                    field.onChange(parseFloat(v));
                  }}
                />
              )}
            />
          </View>
        </View>
        <View>
          <Text className='text-right font-semibold'>
            Total Depreciation Cost: {'\u20B1'}
            {depTotal}
          </Text>
        </View>
      </View>
    </View>
  );
}
