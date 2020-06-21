import React from 'react';
import Loadable from '@loadable/component';

export interface RouterItem {
  path: string,
  exact: boolean,
  title: string,
  icon?: JSX.Element,
  component: React.ElementType,
  routes?: Array<RouterItem>,
}

const Home = Loadable(() => import('src/containers/Home'));
const About = Loadable(() => import('src/containers/About'));
const Blog = Loadable(() => import('src/containers/Blog'));
const Live = Loadable(() => import('src/containers/Live'));

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
  {
    path: '/live', exact: true, component: Live, title: ''
  },
];