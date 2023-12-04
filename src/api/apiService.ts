import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const lebonmeepleApi = createApi({
  reducerPath: "lebonmeepleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: () => ({}),
  tagTypes: ["Posts"],
  keepUnusedDataFor: 1,
  refetchOnMountOrArgChange: true,
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = lebonmeepleApi;
