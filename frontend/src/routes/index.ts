import { lazy } from 'react';

const ECommerce = lazy(() => import('../pages/Dashboard/ECommerce'));
const Transaction = lazy(() => import('../pages/Transaction'));
const About = lazy(() => import('../pages/About'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Analytics = lazy(() => import('../pages/Analytics'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));
const AddTransaction = lazy(() => import('../pages/AddTransaction'));

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
  },
];

const routes = [...coreRoutes];
export default routes;
