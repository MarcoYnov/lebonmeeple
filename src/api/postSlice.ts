import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { IPost } from "../types/post";
import { lebonmeepleApi } from "./apiService";

export const postsSlice = lebonmeepleApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query: () => "/post/get",
      providesTags: ["Posts"],
    }),
    getPostById: builder.query<IPost, string | undefined>({
      query: (postId) => `/post/get/${postId}`,
      providesTags: ["Posts"],
    }),
    deletePost: builder.mutation<void, { postId: number; jwtToken: string }>({
      query: ({ postId, jwtToken }: { postId: number; jwtToken: string }) => ({
        url: `/post/delete/${postId}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + jwtToken,
        },
      }),
      invalidatesTags: ["Posts"],
    }),
    createPost: builder.mutation({
      query:({ body, jwtToken }) => ({
        url: `/post/create`,
        method: "POST",
        headers: {
          Authorization: "Bearer " + jwtToken,
        },
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useDeletePostMutation,
  useGetPostByIdQuery,
  useCreatePostMutation,
} = postsSlice;

export const selectPosts = (state: RootState) => postsSlice.endpoints.getPosts.select()(state).data ?? [];

export const selectPostsById = createSelector(
    selectPosts,
    (_: RootState, postId?: string) => parseInt(String(postId), 10),
    (posts: IPost[], postId: number) => posts.find((post) => post.postId === postId),
);
