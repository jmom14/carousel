import { configureStore } from '@reduxjs/toolkit';
import controlReducer from '../features/control/controlSlice';

export default configureStore({
  reducer: {
    control: controlReducer,
  }
})