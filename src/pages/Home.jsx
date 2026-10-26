import React from 'react'; // бібліотека (вбудована в react)
import qs from 'qs'; // бібліотека (заінстальована) відповідає за витагування даних запросу до сервера в формі string

import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';

import { SearchContext } from '../App.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	setCategoryId,
	setCurrentPage,
	setFilters,
} from '../redux/slices/filterSlice.js';
import { fetchPizzas } from '../redux/slices/pizzaSlice.js';
import { sortList } from '../components/Sort';

export const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isSearch = React.useRef(false);
	const isMounted = React.useRef(false);

	// сортування в URL і в головній сторінці
	const { categoryId, sort, currentPage } = useSelector(state => state.filters);
	const sortOrder = useSelector(state => state.filters.sort.order);
	const { searchValue } = React.useContext(SearchContext);

	// відповідає за Api
	const { items, status } = useSelector(state => state.pizzas);

	const getPizzas = async () => {
		const category = categoryId > 0 ? `category=${categoryId}` : ``;
		const search = searchValue ? `search=${searchValue}` : '';

		dispatch(
			fetchPizzas({
				currentPage,
				sort,
				sortOrder,
				category,
				search,
			}),
		);

		window.scroll(0, 0);
	};

	const onChangeCategory = id => {
		dispatch(setCategoryId(id));
	};
	const onChangePage = number => {
		dispatch(setCurrentPage(number));
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

	// <------------------- useEFFECT -------------------->

	// якшо змінили параметри і був перший рендер
	React.useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortProperty: sort.sortProperty,
				categoryId,
				currentPage,
			});
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [categoryId, sort.sortProperty, currentPage]);

	//1Якщо був перший рендер перевіряємо параметир і зберігаємо в Redux 2 парсинг url-значень в URL bar приклад "'?sortProperty=rating&categoryId=0&currentPage=1'"ф за допомогою redux
	React.useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));

			const sort = sortList.find(
				obj => obj.sortProperty === params.sortProperty,
			);

			dispatch(
				setFilters({
					...params,
					sort,
				}),
			);

			isSearch.current = true;
		}
	}, []);

	// якщо був перший рендер, то запрошуємо піци  підключення до mock API сервера і передавання адреси в URL bar
	React.useEffect(() => {
		window.scrollTo(0, 0);
		getPizzas();
	}, [categoryId, sort.sortProperty, searchValue, currentPage]);

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories value={categoryId} onChangeCategory={onChangeCategory} />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<Pagination currentPage={currentPage} onChangePage={onChangePage} />
			{status === 'error' ? (
				<div className='content__error-info'>
					<h2>
						Произошла Ошибка <icon>😕</icon>
					</h2>
					<p>К сожалению не удалось получить піци.</p>
				</div>
			) : (
				<div className='content__items'>
					{status === 'loading' ? skeletons : pizzas}
				</div>
			)}
			<Pagination currentPage={currentPage} onChangePage={onChangePage} />
		</div>
	);
};

export default Home;
