import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	totalPrice: 0,
	items: [],
};

const calcTotalPrice = items =>
	items.reduce((sum, obj) => obj.price * obj.count + sum, 0);

const removeById = (state, id) => {
	state.items = state.items.filter(obj => obj.id !== id);
	state.totalPrice = calcTotalPrice(state.items);
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
			state.totalPrice = calcTotalPrice(state.items);
		},
		minusItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload);

			if (!findItem) return;

			if (findItem.count > 1) {
				findItem.count--;
				state.totalPrice = calcTotalPrice(state.items);
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

export const selectCart = state => state.cart;
export const selectCartItemsById = id => state =>
	state.cart.items.find(obj => obj.id === id);

export const { addItem, minusItem, removeItems, clearItems } =
	cartSlice.actions;
export default cartSlice.reducer;
