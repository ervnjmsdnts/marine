import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigateBack from '../../../components/navigate-back';

export default function TilapiaSpecies() {
  return (
    <SafeAreaView className='flex-1 bg-slate-50 w-full p-4'>
      <NavigateBack />
      <View className='mt-4'>
        <Image
          className='w-full h-48 rounded-lg'
          source={require('../../../../assets/species/species-tilapia.jpg')}
        />
        <Text className='text-xl mt-2 text-blue-500 font-bold'>
          Tilapia (Orechromis Niloticus)
        </Text>
        <ScrollView>
          <View className='flex flex-col gap-2'>
            <View>
              <Text className='text-lg mt-2 font-bold'>Common Names:</Text>
              <Text>
                Nile Tilapia, Nile Perch, Redbelly Tilapia, Freshwater Snapper,
                Mojara, ngenge, St. Peter’s Fish
              </Text>
            </View>
            <Text>
              Tilapia is the second most prolific species grown in aquaculture
              after carp, and the most widely grown fish on earth.
            </Text>
            <Text>
              Tilapia are a hardly, fast growing fish, that can live up to ten
              years and can reach up to ten pounds in weight. Tilapia are shaped
              like a sun fish or crappie and are easily identifiable by the
              interrupted lateral line characteristics of the chiclid family of
              fishes.
            </Text>
            <Text>Tilapia are found in turbid rivers and lakes.</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
