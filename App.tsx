import React from 'react';
// Navigation
import {NavigationContainer} from '@react-navigation/native';

import AppRoute from './app/routes/appRoute';

const App = () => {
  return (
    <NavigationContainer>
      <AppRoute />
    </NavigationContainer>
  );
};

export default App;
