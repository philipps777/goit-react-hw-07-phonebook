import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setContactsFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setContactsFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const filterInitialState = '';

// const filtersSlice = createSlice({
//   name: 'filters',
//   initialState: filterInitialState,
//   reducers: {
//     setContactsFilter(state, action) {
//       return (state = action.payload);
//     },
//   },
// });

// export const { setContactsFilter } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;
