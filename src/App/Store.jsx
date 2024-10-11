// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/CounterSlice';

export const store = configureStore({
    reducer: {
        counterKey: counterReducer, // 'counterKey' must match the key used in your component
    },
});
