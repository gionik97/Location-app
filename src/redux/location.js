import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  recentSearches: [],
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    addRecentSearch: (state, action) => {
      if (state.recentSearches.length < 4) {
        state.recentSearches.unshift(action.payload);
      } else {
        state.recentSearches.splice(0, 1, action.payload);
      }
    },
  },
});

export const { setSearchQuery, addRecentSearch, replaceLastSearch } =
  locationSlice.actions;

export default locationSlice.reducer;
