import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyledComponent } from 'nativewind';

export default function NavigateBack({ title }: { title: string }) {
  const navigation = useNavigation();
  return (
    <View className='flex flex-row items-center gap-4'>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <StyledComponent
          component={Ionicons}
          name='arrow-back'
          size={32}
          className='text-blue-500'
        />
      </TouchableOpacity>
      <Text className='text-lg font-bold text-blue-500'>{title}</Text>
    </View>
  );
}
