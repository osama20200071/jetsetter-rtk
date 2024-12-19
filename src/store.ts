import { configureStore } from '@reduxjs/toolkit';
import { itemApi } from './services/api-service';

export const store = configureStore({
  reducer: {
    [itemApi.reducerPath]: itemApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    // like setup this api service middleware
    return getDefaultMiddleware().concat(itemApi.middleware);
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
