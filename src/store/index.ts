import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { authApiSlice, authReducer } from './auth';

const rootReducer = combineReducers({
  auth: authReducer,
  [authApiSlice.reducerPath]: authApiSlice.reducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(authApiSlice.middleware);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
