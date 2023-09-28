import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Transaction = lazy(() => import('../pages/Transaction'));
const About = lazy(() => import('../pages/About'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Groups = lazy(() => import('../pages/Groups/Groups'));
const Details = lazy(() => import('../pages/Groups/GroupDetail'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Analytics = lazy(() => import('../pages/Analytics'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));
const AddTransaction = lazy(() => import('../pages/AddTransaction'));
const Friends = lazy(() => import('../pages/Friends'));

const coreRoutes = [
  {
    path: '/home',
    title: 'Home',
    component: Home,
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
    path: '/groups/:groupName',
    title: "Details",
    component: Details,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
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
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  }, 
  {
    path: '/addTransaction',
    title: 'AddTransaction',
    component: AddTransaction,
  },{
    path: '/friends',
    title: 'Friends',
    component: Friends,
  },
];

const routes = [...coreRoutes];
export default routes;
