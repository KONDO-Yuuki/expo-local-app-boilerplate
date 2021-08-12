import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

export type Todo = {
  id: string;
  createdAt: string; // ISO-format
  note: string;
};
type TodoAdd = Omit<Todo, "id" | "createdAt">;

// Initial state of the store
type State = Todo[];
const initialState: State = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoAdd>) => {
      return [
        ...state,
        {
          id: uuid.v4().toString(),
          createdAt: new Date().toISOString(),
          ...action.payload,
        },
      ];
    },
    reset: () => {
      return [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, reset } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
