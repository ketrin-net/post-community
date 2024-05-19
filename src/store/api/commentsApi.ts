import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../config/api/baseUrl';
import { commentResponse } from '../../models/comment.type';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  tagTypes: ['comments'],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    getCommentsByPostId: build.query<commentResponse[], number>({
      query: (postId) => ({
        url: `/comments`,
        params: { postId },
      }),
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'comments' as const, id })), { type: 'comments', id: 'LIST' }]
          : [{ type: 'comments', id: 'LIST' }],
    }),
  }),
});

export const { useGetCommentsByPostIdQuery } = commentsApi;
