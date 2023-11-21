import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useColor } from '../contexts/color-context';

export default function ActionButton({ onPress }: { onPress?: () => void }) {
  const { currentColor } = useColor();
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`h-14 w-14 rounded-full absolute bottom-5 right-5 justify-center items-center ${currentColor.bg}`}>
      <Ionicons name='add' size={32} color='white' />
    </TouchableOpacity>
  );
}
