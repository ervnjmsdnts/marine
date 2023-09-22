import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Species from './_components/species';
import { ScrollView } from 'react-native-gesture-handler';

export default function DiscoverScreen() {
  return (
    <SafeAreaView className='bg-slate-50 flex-1 p-4'>
      <Text className='text-2xl font-bold mb-4'>Discover</Text>
      <ScrollView>
        <Species />
        <Species />
        <Species />
        <Species />
        <Species />
        <Species />
        <Species />
        <Species />
        <Species />
        <Species />
        <Species />
        <Species />
        <Species />
        <Species />
        <Species />
        <Species />
        <Species />
        <Species />
        <Species />
        <Species />
        <Species />
      </ScrollView>
    </SafeAreaView>
  );
}
