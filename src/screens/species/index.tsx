import { RouteProp, useRoute } from '@react-navigation/native';
import { StackParamList } from '../../../App';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigateBack from '../../components/navigate-back';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Breed() {
  return (
    <View className='w-1/2'>
      <TouchableOpacity className='p-1'>
        <View className='h-32 bg-blue-400 p-2 justify-end rounded-lg'>
          <Text className='text-white'>Some Breed</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function SpeciesScreen() {
  const route = useRoute<RouteProp<StackParamList, 'Species'>>();
  return (
    <SafeAreaView className='flex-1 bg-slate-50 w-full p-4'>
      <NavigateBack title={route.params.data} />
      <View className='mt-4 w-full'>
        <Text className='font-bold text-xl'>Common Breeds</Text>
        <View className='flex-row flex-wrap w-full'>
          <Breed />
          <Breed />
          <Breed />
          <Breed />
        </View>
      </View>
    </SafeAreaView>
  );
}
