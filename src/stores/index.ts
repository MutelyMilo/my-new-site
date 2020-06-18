import React from 'react';
import { configure } from 'mobx';

// import AuthStore from './common/AuthStore'
// import OnlineCourseStore from "./modules/OnlineCourseStore";

configure({
  enforceActions: 'always',
});

const storeContext = React.createContext({
  // AuthStore: new AuthStore(),
  // OnlineCourseStore: new OnlineCourseStore(),
});

const useStores = () => React.useContext(storeContext);
export default useStores;
