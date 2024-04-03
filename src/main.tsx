import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import persistedReducer from "./state/rootReducer.ts"
import { PersistGate } from 'redux-persist/integration/react';


const store = configureStore({
  reducer:persistedReducer,
  middleware:getDefaultMiddleware=>
    getDefaultMiddleware({
      serializableCheck:false
    })
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
