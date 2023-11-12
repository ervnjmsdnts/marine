import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import NavigateBack from '../../components/navigate-back';
import Species from './_components/species';
import { StackScreenProps } from '@react-navigation/stack';
import { DiscoverStackParamList } from '../../navigation/discover-stack';

export default function DiscoverScreen({
  navigation,
}: StackScreenProps<DiscoverStackParamList, 'DiscoverMain'>) {
  return (
    <SafeAreaView className='bg-slate-50 flex-1 p-4'>
      <NavigateBack title='Discover Species' />
      <ScrollView>
        <Species
          source={require('../../../assets/species/species-bangus.jpg')}
          name='Milk Fish'
          onPress={() => navigation.navigate('MilkFish')}
        />
        <Species
          source={require('../../../assets/species/species-tilapia.jpg')}
          name='Tilapia'
          onPress={() => navigation.navigate('Tilapia')}
        />
        <Species
          source={require('../../../assets/species/species-shrimp.jpg')}
          name='Shrimp'
          onPress={() => navigation.navigate('Shrimp')}
        />
        <Species
          source={require('../../../assets/species/species-seaweed.jpg')}
          name='Seaweed'
          onPress={() => navigation.navigate('Seaweed')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
