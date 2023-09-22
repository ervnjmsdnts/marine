import { useState } from 'react';
import { Text, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { SafeAreaView } from 'react-native-safe-area-context';
import { pickerStyle } from '../../styles/picker-style';

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

  return (
    <SafeAreaView className='bg-slate-50 flex-1 p-4 gap-4'>
      <Text className='text-2xl font-bold'>Settings</Text>
      <View>
        <Text className='text-lg font-bold'>Language</Text>
        <SelectList
          data={languages}
          save='value'
          defaultOption={languages[0]}
          search={false}
          setSelected={(value: string) => setSelectedLanguage(value)}
          boxStyles={{ ...pickerStyle.boxStyles, marginTop: 8 }}
          dropdownStyles={pickerStyle.dropdownStyles}
        />
      </View>
    </SafeAreaView>
  );
}
