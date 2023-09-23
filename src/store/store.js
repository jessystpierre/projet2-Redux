import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from '../favorite/store/favoriteSlice';

export default configureStore({
	reducer: {
		favorites: favoriteReducer
	}
});