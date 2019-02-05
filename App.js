

import React, { Fragment } from 'react';
import { Text, View } from 'react-native';

import 'config/ReactotronConfig';
import { Provider } from 'react-redux';

import store from "store";
import CustomAlert from 'components/CustomAlert';
import Routes from './src/routes';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <CustomAlert />
      <Routes />
    </Fragment>
  </Provider>
);

export default App;
