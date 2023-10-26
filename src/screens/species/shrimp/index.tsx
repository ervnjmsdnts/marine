import { SafeAreaView } from 'react-native-safe-area-context';
import NavigateBack from '../../../components/navigate-back';
import { Image, ScrollView, Text, View } from 'react-native';

export default function ShrimpSpecies() {
  return (
    <SafeAreaView className='flex-1 w-full bg-slate-50 p-4'>
      <NavigateBack />

      <View className='mt-4'>
        <Image
          className='w-full h-48 rounded-lg'
          source={require('../../../../assets/species/species-shrimp.jpg')}
        />
        <Text className='text-xl mt-2 text-blue-500 font-bold'>
          Shrimp (Caridea, Penaeus, and Metapenaus)
        </Text>
        <ScrollView>
          <View className='mb-2'>
            <Text className='text-lg mt-2 font-bold'>Common Names</Text>
            <Text>
              Rock Shrimp, Pink shrimp, Tigershrimp Chinese white shrimp, brown
              shrimp, white shrimp, Atlantic northern shrimp, spot shrimp, Aesop
              shrimp, banana prawn, blue shrimp
            </Text>
          </View>
          <View className='flex-col gap-2'>
            <Text>
              Shrimp are characterized by a semi transparent body flattered from
              side to side and a flexible abdomen terminating in a fan like
              tail. Plural shrimps or any of numerous small mostly marine shell
              fish that are crustaceans related to the lobsters, that have a
              long slender body, an abdomen that is very thin from side to side,
              and long legs and that include some important as food.
            </Text>
            <Text>
              Raw shrimp meat should be firm and have a mild odor, The shells of
              most varieties are translucent with a grayish green, pinkish tan,
              or light pink tint. The shells should not have black red edges or
              black spots- this is a sign of quality loss. Cooked shrimp meat
              should be firm and have no disagreeable odor.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
