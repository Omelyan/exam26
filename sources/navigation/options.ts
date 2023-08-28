import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const rootStackNavigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
  statusBarTranslucent: true,
  statusBarColor: 'transparent',
  orientation: 'portrait',
  contentStyle: {
    backgroundColor: '#F6ECC9',
  },
  animation: 'slide_from_right',
};
