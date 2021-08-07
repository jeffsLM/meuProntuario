import React from 'react';
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';

import {Provider} from 'react-redux';
import store from './store';
import Backgroud from '~/components/Backgroud';

import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <StatusBar backgroundColor="#0060C5" />
    <Backgroud>
      <Routes />
    </Backgroud>
  </Provider>
);

export default App;
