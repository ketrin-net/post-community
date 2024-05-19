import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { usersApi } from './api/usersApi';
import { postsApi } from './api/postsApi';
import { commentsApi } from './api/commentsApi';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware, postsApi.middleware, commentsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
