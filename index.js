/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import List from './src/components/List';
import FlatListExample from './src/components/FlatListExample';
import Touchables from './src/components/Touchables';
import {name as appName} from './app.json';
import MyApp from './MyApp';
import AppContainer from './AppContainer';
import Todo from './src/components/Todo';

AppRegistry.registerComponent(appName, () =>AppContainer);

