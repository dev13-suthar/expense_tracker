import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import globalReducer from "./index";

const rootReducer = combineReducers({
    global: globalReducer
});

const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export type RootState = ReturnType<typeof rootReducer>;
  export default persistedReducer;