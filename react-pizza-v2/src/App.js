import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';
import Sort from './components/Sort';
import './scss/app.scss';

// import pizzas from './assets/pizza.json';

function App() {
	// https://6a819e35400f94b23c6f89a1.mockapi.io/items

	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(false);

	React.useEffect(() => {
		fetch('https://6a819e35400f94b23c6f89a1.mockapi.io/items')
			.then(res => res.json())
			.then(arr => setItems(arr));
	}, []);

	/*	fetch('https://6a819e35400f94b23c6f89a1.mockapi.io/items')
		.then(res => {
			return res.json();
		})
		.then(json => {
			try {
				setItems(json)
			} catch (error) {
				console.log(error)
			}
		});*/
	return (
		<div className='App'>
			<div className='wrapper'>
				<Header />
				<div className='content'>
					<div className='container'>
						<div className='content__top'>
							<Categories />
							<Sort />
						</div>
						<h2 className='content__title'>Все пиццы</h2>
						<div className='content__items'>
							{isLoading
								? setItems([new Array(6)].map(() => <Skeleton />))
								: items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
