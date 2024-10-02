import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AllController from '@app/navigations/AllController';
import {
  RecoilRoot,
} from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <AllController />
      </SafeAreaProvider>
    </RecoilRoot>

  );
};

export default App;
