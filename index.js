/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ScreenPage1 from './src/screens/ScreenPage1';
import ScreenPage2 from './src/screens/ScreenPage2';

AppRegistry.registerComponent(appName, () => ScreenPage2);
