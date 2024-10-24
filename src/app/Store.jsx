import { configureStore } from '@reduxjs/toolkit'
import  Money  from '../Features/Budget'


export const store = configureStore({
    reducer: {
        moneyKey: Money
    }
})