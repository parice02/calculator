import { createSlice } from "@reduxjs/toolkit";

/**
 * array template [{id:1, value: "2 + 4 = 4"}]
 */

const initial = { value: new Array() };

export const history_slice = createSlice({
  name: "history",
  initialState: {
    value: initial.value,
  },
  reducers: {
    add_line: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    remove_line: (state, action) => {
      const new_array = state.value.filter((value) => value.id !== action.payload.id);
      state.value = new_array;
    },
    delete_all: (state) => {
      state.value = initial.value;
    },
  },
});

export const { add_line, remove_line, delete_all } = history_slice.actions;

export default history_slice.reducer;
