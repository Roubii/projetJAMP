/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import Map from './app/components/Map';
import {
  StatusBar,
  Text
} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <Map/>
      <Text>Test</Text>
    </Fragment>
  );
};


export default App;
