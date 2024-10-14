import { configureStore } from "@reduxjs/toolkit";
// import counter from "../features/CounterSlice";
import todo from "../features/TodoSlice";


export const store = configureStore({
    reducer: {
        // counterKey: counter,
        todoKey: todo,
    }
});