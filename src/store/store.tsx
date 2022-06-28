import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice';
import {postAPI} from "../services/PostService";

const rootReducer = combineReducers({userReducer, [postAPI.reducerPath]: postAPI.reducer});

export const setupStore = () => {
  return configureStore({
      reducer: rootReducer,
      middleware: ((getDefaultMiddleware: any) =>
      getDefaultMiddleware().concat(postAPI.middleware))
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type Appstore = ReturnType<typeof setupStore>
export type AppDispatch = Appstore['dispatch']