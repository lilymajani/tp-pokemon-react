import { configureStore } from '@reduxjs/toolkit';
import documentsReducer from '../features/document/documentSlice';


export default configureStore({
  reducer: {
    pokemons: documentsReducer,
  },
});
