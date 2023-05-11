import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodods = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  console.log("response: ", response);
  return response.json();
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    console.log("bui: ", builder);

    builder.addCase(fetchTodods.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodods.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      console.log("state: ", state);
      console.log("action: ", action);
    });

    builder.addCase(fetchTodods.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;
