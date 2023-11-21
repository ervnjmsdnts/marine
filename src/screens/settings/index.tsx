import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { SafeAreaView } from 'react-native-safe-area-context';
import { pickerStyle } from '../../styles/picker-style';
import { useColor } from '../../contexts/color-context';

const languages = [
  {
    key: '1',
    value: 'English',
  },
  {
    key: '2',
    value: 'Tagalog',
  },
];

export default function SettingsScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const { setColor, currentColor } = useColor();

  return (
    <SafeAreaView className='bg-slate-50 flex-1 p-4 gap-4'>
      <Text className='text-2xl font-bold'>Settings</Text>
      {/* <View className='mb-2'>
        <Text className='text-lg font-bold'>Language</Text>
        <SelectList
          data={languages}
          save='value'
          defaultOption={languages[0]}
          search={false}
          setSelected={(value: string) => setSelectedLanguage(value)}
          boxStyles={{
            ...pickerStyle.boxStyles,
            marginTop: 8,
            borderColor: currentColor.hex,
          }}
          dropdownStyles={pickerStyle.dropdownStyles}
        />
      </View> */}
      <View>
        <Text className='text-lg font-bold'>Color Scheme</Text>
        <View className='flex flex-row mb-2 gap-2'>
          <TouchableOpacity
            onPress={() => setColor('blue')}
            className='bg-blue-500 rounded-md p-4 flex-1'>
            <Text className='text-white'>Blue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setColor('red')}
            className='bg-red-500 rounded-md p-4 flex-1'>
            <Text className='text-white'>Red</Text>
          </TouchableOpacity>
        </View>
        <View className='flex flex-row gap-2'>
          <TouchableOpacity
            onPress={() => setColor('yellow')}
            className='bg-yellow-500 rounded-md p-4 flex-1'>
            <Text className='text-white'>Yellow</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setColor('green')}
            className='bg-green-500 rounded-md p-4 flex-1'>
            <Text className='text-white'>Green</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
