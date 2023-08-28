import { AppRegistry, LogBox } from 'react-native';

import App from '~/App';

LogBox.ignoreLogs([
  'Animated: `useNativeDriver` was not specified.', // react-native-indicators issue, need to be replaced or patched
  'Overriding previous layout animation with new one', // some troubles on iOS emulator
]);

AppRegistry.registerComponent('exam26', () => App);
