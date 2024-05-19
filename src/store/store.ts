import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { usersApi } from './api/usersApi';
import { postsApi } from './api/postsApi';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware, postsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
