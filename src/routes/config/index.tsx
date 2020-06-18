import React from 'react';
import Loadable from 'react-loadable';
import Loading from 'src/common/loading'

export interface RouterItem {
  path: string,
  exact: boolean,
  title: string,
  icon?: JSX.Element,
  component: React.ElementType,
  routes?: Array<RouterItem>,
}

const Home = Loadable({
  loader: () => import('src/containers/Home'),
  loading: Loading,
});


export const Index: Array<RouterItem> = [
  {
    path: '/', exact: false, component: Home, title: '——', routes:
      [{
        path: '/home', exact: true, component: Home, title: ''
      }]
  },
  // {
  //   path: '/other', exact: false, component: Other, icon: <ControlOutlined />, title: '测试TAB',
  // }
];