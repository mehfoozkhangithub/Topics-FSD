import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todoSlicer = createSlice({
  name: 'todo',
  initialState: { todo: [], isLoading: false, isError: false },
  reducers: {
    addTodo: (state, action) => {
      const todoData = {
        id: nanoid(),
        text: action.payload,
        isEdit: false,
        isComplete: false,
      };
      state.todo.push(todoData);
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlicer.actions;
export const todoSlicerReducer = todoSlicer.reducer;
