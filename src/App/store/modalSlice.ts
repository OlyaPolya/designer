import { createSlice } from '@reduxjs/toolkit';

export interface State {
  isOpen: boolean;
}

const initialState: State = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'setModal',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;





























