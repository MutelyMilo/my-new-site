import React from 'react';
import Loadable from 'react-loadable';
import Loading from 'src/common/Loading'

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
const About = Loadable({
  loader: () => import('src/containers/About'),
  loading: Loading,
});
const Blog = Loadable({
  loader: () => import('src/containers/Blog'),
  loading: Loading,
});

export const routesConfig: Array<RouterItem> = [
  {
    path: '/home', exact: true, component: Home, title: ''
  },
  {
    path: '/about', exact: true, component: About, title: ''
  },
  {
    path: '/blog', exact: true, component: Blog, title: ''
  },
];