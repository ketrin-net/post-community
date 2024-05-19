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
    getPostById: build.query<postResponse, number>({
      query: (postId) => `/posts/${postId}`,
      providesTags: (result) => [{ type: 'posts', id: 'LIST' }],
    }),
    editPost: build.mutation<void, Pick<postResponse, 'id'> & Partial<postResponse>>({
      query: ({ id, ...patch }) => ({
        url: `posts/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          postsApi.util.updateQueryData('getPostById', id, (draft) => {
            Object.assign(draft, patch);
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const { useGetPostsByUserIdQuery, useGetPostByIdQuery, useEditPostMutation } = postsApi;
