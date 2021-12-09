import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./location";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
  key: "root",
  version: 1,
  storage: sessionStorage,
};

const persistedReducer = persistReducer(persistConfig, locationReducer);

export const store = configureStore({
  reducer: { location: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
