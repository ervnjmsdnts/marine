import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DevelopersScreen() {
  return (
    <SafeAreaView className='bg-slate-50 flex-1 p-4 gap-4'>
      <Text className='text-2xl font-bold'>Developers</Text>
    </SafeAreaView>
  );
}
