import { AppRegistry } from 'react-native';
import AppLayout from './app/_layout'; // Use _layout.tsx as the entry point
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppLayout);
