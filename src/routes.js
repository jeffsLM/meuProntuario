import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';

import Main from '~/pages/Main';
import MedicalRecord from '~/pages/MedicalRecord';

const Routes = createAppContainer(
  createSwitchNavigator(
    {App: Main, MR: MedicalRecord},
    {
      initialRouteName: 'App',
    },
  ),
);

export default Routes;
