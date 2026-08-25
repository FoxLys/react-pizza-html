import React from 'react';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';

export const Home = () => {
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [categoryId, setCategoryId] = React.useState(0);
	const [sortType, setSortType] = React.useState(0);

	console.log(sortType);

	React.useEffect(() => {
		setIsLoading(true);

		const url =
			categoryId === 0
				? 'https://6a819e35400f94b23c6f89a1.mockapi.io/items'
				: `https://6a819e35400f94b23c6f89a1.mockapi.io/items?category=${categoryId}&sortBy=${sortType.sortProperty}&order=desc`;

		fetch(url)
			.then(res => res.json())
			.then(arr => {
				setItems(arr);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [categoryId, sortType]);

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					value={categoryId}
					onChangeCategory={id => setCategoryId(id)}
				/>
				<Sort sortValue={sortType} onChangeSort={i => setSortType(i)} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
					: items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
			</div>
		</div>
	);
};

export default Home;
