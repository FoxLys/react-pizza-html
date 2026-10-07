import { Route, Routes } from 'react-router';
import React from 'react';
import Cart from '../src/pages/Cart';
import Home from '../src/pages/Home';
import NotFound from '../src/pages/NotFound';
import Header from './components/Header';
import './scss/app.scss';

export const SearchContext = React.createContext(); // контекст

function App() {
	const [searchValue, setSearchValue] = React.useState('');
	return (
		<div className='wrapper'>
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>

				<Header />
				<div className='content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</SearchContext.Provider>
		</div>
	);
}

export default App;
