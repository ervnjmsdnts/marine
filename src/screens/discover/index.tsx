import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Species from './_components/species';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { RootScreenComposite } from '../../../App';

export default function DiscoverScreen() {
  const navigation = useNavigation<RootScreenComposite>();
  return (
    <SafeAreaView className='bg-slate-50 flex-1 p-4'>
      <Text className='text-2xl font-bold mb-4'>Discover</Text>
      <ScrollView>
        <Species
          source={require('../../../assets/species/species-bangus.jpg')}
          name='Milk Fish'
          onPress={() => navigation.navigate('Species', { data: 'Milk Fish' })}
        />
        <Species
          source={require('../../../assets/species/species-tilapia.jpg')}
          name='Tilapia'
          onPress={() => navigation.navigate('Species', { data: 'Tilapia' })}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
