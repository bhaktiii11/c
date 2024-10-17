import { createSlice } from "@reduxjs/toolkit";


export const todo = createSlice({
    name: "todo",
    initialState: { students: [] },
    reducers: {
        addData: (state, action) => {
            state.students.push(action.payload)
        },
        deleteData: (state, action) => {
            let data = state.students.filter((item) => item.id != action.payload)
            state.students = data
        },
        updateData: (state,action) => {
            state.students.map((e,i) => {
                if (e.id == action.payload.id) {
                    e.name = action.payload.name 
                    e.email = action.payload.email
                    e.task = action.payload.task
                    e.priority = action.payload.priority
                }
                else {
                    e
                }
            })
        }
    }
})
export const { addData , deleteData , updateData } = todo.actions
export default todo.reducer