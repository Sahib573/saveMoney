import { lazy } from 'react';

const ECommerce = lazy(() => import('../pages/Dashboard/ECommerce'));
const Transaction = lazy(() => import('../pages/Transaction'));
const About = lazy(() => import('../pages/About'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Groups = lazy(() => import('../pages/Groups'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Activities = lazy(() => import('../pages/Activities'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));

const coreRoutes = [
  {
    path: '/ecommerce',
    title: 'Ecommerce',
    component: ECommerce,
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
    path: '/activities',
    title: 'Activities',
    component: Activities,
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
];

const routes = [...coreRoutes];
export default routes;
