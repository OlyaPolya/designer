import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UrlState {
  url: string;
}

const initialState: UrlState = {
  url: '',
};

export const urlSlice = createSlice({
  name: 'setUrl',
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
  },
});

export const { setUrl } = urlSlice.actions;
export default urlSlice.reducer;
