import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function ActionButton({ onPress }: { onPress?: () => void }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className='h-14 w-14 rounded-full absolute bottom-5 right-5 justify-center bg-blue-500 items-center'>
      <Ionicons name='add' size={32} color='white' />
    </TouchableOpacity>
  );
}
