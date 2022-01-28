import { createSlice } from '@reduxjs/toolkit';

export const controlSlice = createSlice({
  name: 'control',
  initialState: {
    isPlaying: true,
    currentIndex: 0,
  },
  reducers: {
    next: (state, action) => {
      const length = action.payload - 1;
      if(state.currentIndex === length){
        state.currentIndex = 0;
      }else{
        state.currentIndex += 1;
      }
    },
    previous: (state, action) => {
      const length = action.payload - 1;
      if(state.currentIndex === 0){
        state.currentIndex = length;
      }else {
        state.currentIndex -= 1; 
      }
      state.isPlaying = true;
    },
    togglePlay: state => {
      state.isPlaying = !state.isPlaying;
    }
  }
});

export const { next, previous, togglePlay } = controlSlice.actions;

export default controlSlice.reducer;
