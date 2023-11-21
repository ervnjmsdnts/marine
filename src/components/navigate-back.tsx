import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyledComponent } from 'nativewind';
import { useColor } from '../contexts/color-context';

export default function NavigateBack({ title }: { title?: string }) {
  const navigation = useNavigation();
  const { currentColor } = useColor();
  return (
    <View className='flex flex-row items-center gap-4 mb-4'>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <StyledComponent
          component={Ionicons}
          name='arrow-back'
          size={32}
          className={`${currentColor.text}`}
        />
      </TouchableOpacity>
      <Text className={`text-lg font-bold ${currentColor.text}`}>{title}</Text>
    </View>
  );
}
