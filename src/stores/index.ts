import React from 'react';
import { configure } from 'mobx';

import LiveStore from 'src/stores/models/LiveStore';

configure({
  enforceActions: 'always',
});

const storeContext = React.createContext({
  LiveStore: new LiveStore()
});

const useStores = () => React.useContext(storeContext);
export default useStores;
