import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { State } from '../Portfolio/interfaces'

const initialState: State = {
  img: '',
  link: '',
  title: '',
  subtitle: '',
  width: 0,
  height: 0,
};

export const bannerSlice = createSlice({
  name: 'setBanner',
  initialState,
  reducers: {
    setBanner: (state, action: PayloadAction<State>) => {
      const { img, link, title, subtitle, width, height } = action.payload;
      state.img = img;
      state.link = link;
      state.title =  title;
      state.subtitle = subtitle;
      state.width = width;
      state.height = height;
    },
  },
});

export const { setBanner } = bannerSlice.actions;

export default bannerSlice.reducer;






















