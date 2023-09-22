import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Species() {
  return (
    <TouchableOpacity onPress={() => {}} className='mb-2'>
      <View className='p-4 bg-white rounded-lg h-24 justify-center'>
        <Text className='font-bold'>Species Name</Text>
      </View>
    </TouchableOpacity>
  );
}
