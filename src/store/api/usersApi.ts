import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../config/api/baseUrl';
import { userResponse } from '../../models/user.type';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  tagTypes: ['users'],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    getUsers: build.query<userResponse[], void>({
      query: () => `/users`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'users' as const, id })), { type: 'users', id: 'LIST' }]
          : [{ type: 'users', id: 'LIST' }],
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
