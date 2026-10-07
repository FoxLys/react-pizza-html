import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	totalPrice: 0,
	items: [],
};

const filterSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemst(state, action) {
			state.items.push(action.payload);
		},
		removeItems(state, action) {
			state.items.filter(obj => obj.id !== action.payload);
		},
		removeItems(state, action) {
			state.items = [];
		},
	},
});

export const { addProduct } = filterSlice.actions;
export default filterSlice.reducer;
