import { StackScreenProps } from '@react-navigation/stack';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LandingStackParamList } from '../../navigation/landing-stack';
import { useColor } from '../../contexts/color-context';

export default function LandingScreen({
  navigation,
}: StackScreenProps<LandingStackParamList, 'Landing'>) {
  const navigateToApp = () => navigation.navigate('HomeTabs');
  const { currentColor } = useColor();
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
          className={`py-2 px-8 rounded-full ${currentColor.bg}`}>
          <Text className='text-white text-center text-lg'>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
