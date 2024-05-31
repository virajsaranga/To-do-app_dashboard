import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodos } from "../services/todoServices";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const data = await fetchTodos();
  return data;
});

const todoSlice = createSlice({
  name: "todos",
  initialState: { items: [], status: null },
  reducers: {
    markAsDone: (state, action) => {
      const id = action.payload;
      const todo = state.items.find((item) => item.id === id);
      if (todo) {
        todo.completed = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(getTodos.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { markAsDone } = todoSlice.actions;
export default todoSlice.reducer;
