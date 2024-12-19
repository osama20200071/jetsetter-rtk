import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    // that void for query params and Item[] is the return
    getItems: builder.query<{ items: Item[] }, void>({
      // this takes params if there like item id and return the endpoint
      query: () => 'items',
    }),
  }),
});

export const { useGetItemsQuery, useLazyGetItemsQuery } = itemApi;
