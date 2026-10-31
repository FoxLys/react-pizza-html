import axios from 'axios'; // бібліотека (заінстальована) по запросам на сервер, зручніша заміна fetch
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk(
	'pizzas/fetchPizzasStatus',
	async (params, thinkAPI) => {
		const { currentPage, sort, sortOrder, category, search } = params;

		const { data } = await axios.get(
			`https://6a819e35400f94b23c6f89a1.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort.sortProperty}&order=${sortOrder}&${search}`,
		);

		return data;
	},
);

export const initialState = {
	items: [],
	status: 'loading', // loading, success, error
};

const pizzaSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchPizzas.pending, state => {
				state.status = 'loading';
				state.items = [];
			})
			.addCase(fetchPizzas.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = 'success';
			})
			.addCase(fetchPizzas.rejected, state => {
				state.status = 'error';
				state.items = [];
			});
	},
});
export const selectorPizzaData = state => state.pizzas;

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
