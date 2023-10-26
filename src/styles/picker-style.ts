import { StyleSheet } from 'react-native';

export const pickerStyle = StyleSheet.create({
  boxStyles: {
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderColor: '#3b82f6',
    borderWidth: 1,
  },
  dropdownStyles: {
    position: 'absolute',
    top: 40,
    width: '100%',
    zIndex: 10,
    backgroundColor: 'white',
    borderWidth: 0,
    borderColor: 'transparent',
    elevation: 3,
  },
});
