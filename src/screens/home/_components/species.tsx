import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Species() {
  return (
    <TouchableOpacity className='mr-3'>
      <View className='p-4 bg-white h-32 w-48 justify-end'>
        <Text className='font-bold'>Name</Text>
      </View>
    </TouchableOpacity>
  );
}
