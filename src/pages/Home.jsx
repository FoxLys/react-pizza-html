import React from 'react';
import axios from 'axios';

import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';

import { SearchContext } from '../App.js';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice.js';
import { setSort } from '../redux/slices/filterSlice.js';

export const Home = () => {
	const dispatch = useDispatch();
	const { categoryId, sort } = useSelector(state => state.filters);
	const sortOrder = useSelector(state => state.filters.sort.order);
	const { searchValue } = React.useContext(SearchContext);

	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	// const [categoryId, setCategoryId] = React.useState(0);
	const [currentPage, setCurrentPage] = React.useState(1);
	// const [sortType, setSortType] = React.useState({
	// 	sortProperty: 'rating',
	// 	order: 'desc',
	// });

	const onChangeCategory = id => {
		dispatch(setCategoryId(id));
	};

	const skeletons = [...new Array(6)].map((_, index) => (
		<Skeleton key={index} />
	));

	const pizzas = (Array.isArray(items) ? items : [])
		.filter(obj => {
			if (!searchValue) return true;
			return obj.title.toLowerCase().includes(searchValue.toLowerCase());
		})
		.map(obj => <PizzaBlock key={obj.id} {...obj} />);

	React.useEffect(() => {
		const category = categoryId > 0 ? `category=${categoryId}` : ``;
		const search = searchValue ? `search=${searchValue}` : '';

		const url = `https://6a819e35400f94b23c6f89a1.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort.sortProperty}&order=${sortOrder}&${search}`;

		axios
			.get(url)
			.then(res => {
				setItems(Array.isArray(res.data) ? res.data : []);
				setIsLoading(false);
			})
			.catch(() => setItems([]));

		window.scrollTo(0, 0); // <-- скролить на верх
	}, [categoryId, sort.sortProperty, sortOrder, searchValue, currentPage]);

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories value={categoryId} onChangeCategory={onChangeCategory} />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<Pagination
				currentPage={currentPage}
				onChangePage={setCurrentPage}
				pageCount={3}
			/>
			<div className='content__items'>{isLoading ? skeletons : pizzas}</div>
			<Pagination
				currentPage={currentPage}
				onChangePage={setCurrentPage}
				pageCount={3}
			/>
		</div>
	);
};

export default Home;
