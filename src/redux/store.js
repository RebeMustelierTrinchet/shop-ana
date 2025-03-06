import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // usa localStorage
// import storageSession from 'redux-persist/lib/storage/session' // usa sessionStorage
import { combineReducers } from 'redux';
import cartReducer from './cartSlice'; // ajusta el path según la ubicación de tu archivo cartSlice

const persistConfig = {
  key: 'root',
  storage, // o storageSession si prefieres usar sessionStorage
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
