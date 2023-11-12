import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ScrollView, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { TilapiaStackParamsList } from '../../../navigation/tilapia-stack';
import NavigateBack from '../../../components/navigate-back';

const content = [
  'Maitim na may matingkad na kulay sa dulo ng palikpik at buntot',
  'Ang lalaki ay may kulay dilaw ang baba',
];
export default function TilapiaBreed({
  route,
}: StackScreenProps<
  TilapiaStackParamsList,
  'Mossambica' | 'Zili' | 'Aureus' | 'Nilotica'
>) {
  return (
    <SafeAreaView className='bg-slate-50 flex-1 p-4'>
      <NavigateBack title={route.name} />
      <Image className='w-full h-48 rounded-lg' source={route.params.image} />
      <ScrollView>
        <View className='flex flex-col gap-2 mt-4'>
          {route.params.content.map((text, index) => (
            <Text key={index}>{`\u2022 ${text}`}</Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
