import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	totalPrice: 0,
	items: [],
};

const removeById = (state, id) => {
	state.items = state.items.filter(obj => obj.id !== id);
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id);

			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({ ...action.payload, count: 1 });
			}
			state.totalPrice = state.items.reduce((sum, obj) => {
				return obj.price * obj.count + sum;
			}, 0);
		},
		minusItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload);

			if (!findItem) return;

			if (findItem.count > 1) {
				findItem.count--;
				state.totalPrice = state.items.;

			} else {
				removeById(state, action.payload);
			}
		},
		removeItems(state, action) {
			removeById(state, action.payload);
		},
		clearItems(state) {
			state.items = [];
			state.totalPrice = 0;
		},
	},
});

export const { addItem, minusItem, removeItems, clearItems } =
	cartSlice.actions;
export default cartSlice.reducer;
