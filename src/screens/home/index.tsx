import { StackScreenProps } from '@react-navigation/stack';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeStackParamsList } from '../../navigation/home-stack';

export default function HomeScreen({
  navigation,
}: StackScreenProps<HomeStackParamsList, 'HomeMain'>) {
  const navigateToDiscover = () => navigation.navigate('DiscoverStack');
  return (
    <SafeAreaView className='flex-1 bg-slate-50 p-4 gap-4'>
      <View className='flex flex-col justify-center gap-y-4 items-center h-full'>
        <TouchableOpacity
          className='bg-blue-500 py-8 w-60 rounded-lg'
          onPress={navigateToDiscover}>
          <Text className='text-white text-center font-bold'>
            Discover Species
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled
          className='bg-blue-500 opacity-50 w-60 py-8 px-4 rounded-lg'>
          <Text className='text-white text-center font-bold'>
            General Information About Fishpond Management
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
