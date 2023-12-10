import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Transaction = lazy(() => import('../pages/Transaction'));
const About = lazy(() => import('../pages/About'));
const Groups = lazy(() => import('../pages/Groups/Groups'));
const AddGroup = lazy(() => import('../pages/Groups/AddGroups'));
const Details = lazy(() => import('../pages/Groups/GroupDetail'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Analytics = lazy(() => import('../pages/Analytics'));
const AddTransaction = lazy(() => import('../pages/AddTransaction'));
const Friends = lazy(() => import('../pages/Friends'));

const coreRoutes = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/transaction',
    title: 'Transaction',
    component: Transaction,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/groups',
    title: 'Groups',
    component: Groups,
  },
  {
    path: '/groups/addGroup',
    title: 'New Group',
    component: AddGroup,
  },
  {
    path: '/groups/:groupName',
    title: "Details",
    component: Details,
  },

  {
    path: '/analytics',
    title: 'Analytics',
    component: Analytics,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/aboutUs',
    title: 'About Us',
    component: About,
  },

  {
    path: '/addTransaction',
    title: 'AddTransaction',
    component: AddTransaction,
  }, {
    path: '/friends',
    title: 'Friends',
    component: Friends,
  },
];

const routes = [...coreRoutes];
export default routes;
