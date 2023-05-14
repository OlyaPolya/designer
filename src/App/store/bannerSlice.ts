import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

export interface State {
  img: string;
  link: string;
  title: string;
  subtitle: string;
  width: number;
  height: number;
}

const initialState: State = {
  img: './SAMPLE_PICTURES/2.png',
  link: './SAMPLE_BANNERS/burger_club/index.html',
  title: 'image',
  subtitle: 'subtitle',
  width: 400,
  height: 200,
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
//export const selectCount = (state: RootState) => state.counter.value;

export default bannerSlice.reducer;























