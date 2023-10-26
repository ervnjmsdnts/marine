import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Species({
  source,
  name,
  onPress,
}: {
  source: any;
  name: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} className='mb-2'>
      <ImageBackground source={source} imageStyle={{ borderRadius: 10 }}>
        <LinearGradient
          start={{ x: 0.5, y: 0.75 }}
          end={{ x: 0, y: 0.25 }}
          colors={['#00000000', '#000000']}
          style={{ borderRadius: 10 }}>
          <View className='p-4 rounded-lg h-24 justify-center'>
            <Text className='font-bold text-white'>{name}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
