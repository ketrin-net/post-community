import { createBrowserRouter } from 'react-router-dom';
import { Route } from './Route';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { UsersPage } from '../../pages/UsersPage/UsersPage';
import PostPage from '../../pages/PostPage/PostPage';

export const router = createBrowserRouter([
  {
    path: Route.Home,
    element: <MainLayout />,
    children: [
      {
        path: Route.Home,
        element: <UsersPage />,
        index: true,
      },
      {
        path: Route.Post,
        element: <PostPage />,
      },
      {
        path: Route.NotFound,
        element: <NotFoundPage />,
      },
    ],
  },
]);
