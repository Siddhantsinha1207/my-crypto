import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    todoAdd(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
      });
    },
    todoToggle(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

export const { todoAdd, todoToggle } = todos.actions;
export default todos.reducer;
