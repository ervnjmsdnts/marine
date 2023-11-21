import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const colors = {
  blue: {
    text: 'text-blue-500',
    bg: 'bg-blue-500',
    hex: '#3b82f6',
  },
  red: {
    text: 'text-red-500',
    bg: 'bg-red-500',
    hex: '#ef4444',
  },
  yellow: {
    text: 'text-yellow-500',
    bg: 'bg-yellow-500',
    hex: '#eab308',
  },
  green: {
    text: 'text-green-500',
    bg: 'bg-green-500',
    hex: '#22c55e',
  },
};

type ColorType = 'blue' | 'red' | 'yellow' | 'green';

const ColorsContext = createContext({
  currentColor: colors.blue,
  setColor: (colorKey: ColorType) => {},
});

export default function ColorsProvider({ children }: PropsWithChildren) {
  const [defaultColor, setDefaultColor] = useState(colors.blue);

  useEffect(() => {
    const fetchColor = async () => {
      try {
        const colorKey = (await AsyncStorage.getItem('color')) as ColorType;
        const color =
          colorKey && colors[colorKey] ? colors[colorKey] : colors.blue;

        setDefaultColor(color);
      } catch (error) {
        console.error('Error fetching colors: ', error);
      }
    };

    fetchColor();
  }, []);

  const setColor = async (colorKey: ColorType) => {
    setDefaultColor(colors[colorKey]);

    await AsyncStorage.setItem('color', colorKey);
  };

  return (
    <ColorsContext.Provider value={{ currentColor: defaultColor, setColor }}>
      {children}
    </ColorsContext.Provider>
  );
}

export const useColor = () => useContext(ColorsContext);
