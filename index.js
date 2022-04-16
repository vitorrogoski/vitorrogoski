/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppClass from './AppClass';
import AppFunction from './AppFunction';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppFunction);
