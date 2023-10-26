import { SafeAreaView } from 'react-native-safe-area-context';
import NavigateBack from '../../../components/navigate-back';
import { Image, ScrollView, Text, View } from 'react-native';

export default function MilkFishSpecies() {
  return (
    <SafeAreaView className='flex-1 w-full p-4 bg-slate-50'>
      <NavigateBack />
      <View className='mt-4'>
        <Image
          className='h-48 w-full rounded-lg'
          source={require('../../../../assets/species/species-bangus.jpg')}
        />
        <Text className='text-xl mt-2 text-blue-500 font-bold'>
          Bangus (Chanos chanos)
        </Text>
        <ScrollView>
          <View className='flex flex-col'>
            <View className='mb-2'>
              <Text className='text-lg mt-2 font-bold'>Common Names</Text>
              <Text>
                Hawaiian name for the fish is awa and in tahatian where it is
                popularly known as the nation fish, although the national
                commission for culture and arts.
              </Text>
            </View>
            <View className='flex-col gap-2'>
              <Text>
                Milkfishes commonly lives in tropical offshore marine water
                around island and along continental shelves at depths of 1 to 30
                m. They also frequently enter estuaries and rivers.
              </Text>
              <Text>
                Bangus also known as milkfish is a type of fish commonly found
                in the water.
              </Text>
              <Text>
                Bangus has a distinctive flavor, characterized by its tender
                white flesh and mild, slightly sweet taste.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
