import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DevelopersScreen() {
  return (
    <SafeAreaView className='bg-slate-50 flex-1 p-4 gap-4'>
      <Text className='text-2xl font-bold'>Developers</Text>
      <ScrollView>
        <View className='flex items-center mb-4'>
          <Image
            className='w-32 h-32 mb-2'
            source={require('../../../assets/developers/school-logo.jpg')}
          />
          <Text className='text-lg text-center'>
            This Application was developed by the following students of
            Occidental Mindoro State College San Jose Campus
          </Text>
        </View>
        <View className='flex flex-row gap-2 mb-2'>
          <View className='flex-1'>
            <Image
              source={require('../../../assets/developers/dev-1.jpg')}
              className='w-full h-32 rounded-md'
            />
            <Text className='font-bold text-center'>JOHNPAUL S. SONGCO</Text>
            <Text className='text-center'>DATA ANALYST & DATA COLLECTOR</Text>
          </View>
          <View className='flex-1'>
            <Image
              source={require('../../../assets/developers/dev-2.jpg')}
              className='w-full h-32 rounded-md'
            />
            <Text className='font-bold text-center'>JELYN D. COLENDRES</Text>
            <Text className='text-center'>UI DESIGNER</Text>
          </View>
        </View>
        <View className='flex flex-row gap-2'>
          <View className='flex-1'>
            <Image
              source={require('../../../assets/developers/dev-3.jpg')}
              className='w-full h-32 rounded-md'
            />
            <Text className='font-bold text-center'>RAYLEN F. OBRADOR</Text>
            <Text className='text-center'>PROGRAMMER</Text>
          </View>
          <View className='flex-1'>
            <Image
              source={require('../../../assets/developers/dev-4.jpg')}
              className='w-full h-32 rounded-md'
            />
            <Text className='font-bold text-center'>QUEEN KAYCE R. MANALO</Text>
            <Text className='text-center'>DOCUMENTATOR</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
