import { SafeAreaView } from 'react-native-safe-area-context';
import NavigateBack from '../../../components/navigate-back';
import { Image, ScrollView, Text, View } from 'react-native';
import { useColor } from '../../../contexts/color-context';

export default function SeaWeedSpecies() {
  const { currentColor } = useColor();
  return (
    <SafeAreaView className='flex-1 w-full bg-slate-50 p-4'>
      <NavigateBack />

      <View className='mt-4'>
        <Image
          className='w-full h-48 rounded-lg'
          source={require('../../../../assets/species/species-seaweed.jpg')}
        />
        <Text className={`text-xl mt-2 ${currentColor.text} font-bold`}>
          Seaweed
        </Text>
        <ScrollView>
          <View className='mb-2'>
            <Text className='text-lg mt-2 font-bold'>
              What can you make from seaweed?
            </Text>
            <Text>
              Jet fuel, vegan eggs, food coloring and running shoes can all be
              made from algae. They're even being used on a space mission. We
              can blend algae with gasoline to make bio-fuel, and we can convert
              it into bio-diesel and bio jet-fuel.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
