import React from 'react'

import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Sort from '../components/Sort'

export const Home = ({ searchValue }) => {
	const [items, setItems] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)
	const [categoryId, setCategoryId] = React.useState(0)
	const [sortType, setSortType] = React.useState({
		sortProperty: 'rating',
		order: 'desc',
	})

	const skeletons = [...new Array(6)].map((_, index) => (
		<Skeleton key={index} />
	))

	const pizzas = items
		.filter(obj => {
			if (!searchValue) return true
			return obj.title.toLowerCase().includes(searchValue.toLowerCase())
		})
		.map(obj => <PizzaBlock key={obj.id} {...obj} />)

	React.useEffect(() => {
		const category = categoryId > 0 ? `category=${categoryId}` : ``
		const url = `https://6a819e35400f94b23c6f89a1.mockapi.io/items?${category}&sortBy=${sortType.sortProperty}&order=${sortType.order}`

		fetch(url)
			.then(res => res.json())
			.then(arr => {
				setItems(arr)
				setIsLoading(false)
			})
		window.scrollTo(0, 0)
	}, [categoryId, sortType])

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
			<div className='content__items'>{isLoading ? skeletons : pizzas}</div>
		</div>
	)
}

export default Home
