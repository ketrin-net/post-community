import { createBrowserRouter } from 'react-router-dom';
import { Route } from './Route';

export const router = createBrowserRouter([
  {
    path: Route.Home,
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
      },
    ],
  },
]);
