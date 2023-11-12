import { StackScreenProps } from '@react-navigation/stack';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LandingStackParamList } from '../../navigation/landing-stack';

export default function LandingScreen({
  navigation,
}: StackScreenProps<LandingStackParamList, 'Landing'>) {
  const navigateToApp = () => navigation.navigate('HomeTabs');
  return (
    <SafeAreaView className='bg-slate-50 flex-1 p-4'>
      <View className='flex flex-col justify-center h-full items-center'>
        <View className='flex flex-col items-center pb-64'>
          <Image
            source={require('../../../assets/logo.png')}
            className='w-32 h-32'
          />
          <Text className='font-bold text-4xl'>Welcome!</Text>
        </View>
        <TouchableOpacity
          onPress={navigateToApp}
          className='py-2 px-8 bg-blue-500 rounded-full'>
          <Text className='text-white text-center text-lg'>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
