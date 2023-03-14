import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const rawg = createApi({
  reducerPath: "rawg",
  baseQuery: fetchBaseQuery({
    branch: "red",
    baseUrl: `https://rawg-video-games-database.p.rapidapi.com${branch}?key=f58d8c3022554fca911687f4e440b514`,
    prepareHeaders:(headers)=>{
      headers.set('X-RapidAPI-Key', '8755e71222msh09f429617efba1ap1fe33bjsn0d2e97b3c98b');

      return headers;
    }
  }),

  endpoints: (builder)=>({
    getGenre: builder.query({query:()=>'/genres'})
  })
});

export const{
  topQuery,
} = rawg;