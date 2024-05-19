import { createBrowserRouter } from 'react-router-dom';
import { Route } from './Route';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: Route.Home,
    element: <MainLayout />,
    children: [
      {
        path: Route.Home,
        index: true,
      },
      {
        path: Route.Post,
      },
      {
        path: Route.NotFound,
        element: <NotFoundPage />,
      },
    ],
  },
]);
