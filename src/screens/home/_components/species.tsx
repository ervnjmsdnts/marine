import { LinearGradient } from 'expo-linear-gradient';
import { StyledComponent } from 'nativewind';
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
    <TouchableOpacity className='mr-3' onPress={onPress}>
      <StyledComponent
        component={ImageBackground}
        source={source}
        imageStyle={{ borderRadius: 10 }}>
        <LinearGradient
          colors={['#00000000', '#000000']}
          style={{ borderRadius: 10 }}>
          <View className='p-4 h-32 w-48 justify-end'>
            <Text className='font-bold text-white'>{name}</Text>
          </View>
        </LinearGradient>
      </StyledComponent>
    </TouchableOpacity>
  );
}
