import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	categoryId: 0,
	sort: {
		sortProperty: 'rating',
		order: 'desc',
	},
};

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},
	},
});

export const { setCategoryId } = filterSlice.actions;
export default filterSlice.reducer;
