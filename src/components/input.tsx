import { Text, TextInput, TextInputProps, View } from 'react-native';

interface InputProps extends TextInputProps {
  label: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <View className='flex-1'>
      <Text className='text-slate-500'>{label}</Text>
      <TextInput
        className='rounded-md py-1 bg-white border border-slate-800/50 px-4'
        {...props}
      />
    </View>
  );
}
