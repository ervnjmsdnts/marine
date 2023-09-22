import { Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Species from './_components/species';
import { StyledComponent } from 'nativewind';
import { TabProp } from '../../navigation/home-tabs';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation<TabProp>();
  return (
    <SafeAreaView className='flex-1 bg-slate-50 p-4 gap-4'>
      <Text className='font-bold text-2xl text-blue-500'>Aqua Culture</Text>
      <View className='flex-row justify-between items-center'>
        <Text className='text-lg font-bold'>Species</Text>
        <TouchableOpacity
          className='flex-row items-center justify-between gap-2'
          onPress={() => navigation.navigate('Discover')}>
          <Text className='text-blue-600'>More</Text>
          <StyledComponent
            component={Ionicons}
            className='text-blue-600'
            name='arrow-forward'
          />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        <Species />
        <Species />
        <Species />
      </ScrollView>
    </SafeAreaView>
  );
}
