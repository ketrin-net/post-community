import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../config/api/baseUrl';
import { postResponse } from '../../models/post.type';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ['posts'],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    getPostsByUserId: build.query<postResponse[], number>({
      query: (userId) => ({
        url: `/posts`,
        params: { userId },
      }),
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'posts' as const, id })), { type: 'posts', id: 'LIST' }]
          : [{ type: 'posts', id: 'LIST' }],
    }),
  }),
});

export const { useGetPostsByUserIdQuery } = postsApi;
