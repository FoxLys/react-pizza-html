import { Route, Routes } from 'react-router';

import React from 'react';
import Cart from '../src/pages/Cart';
import Home from '../src/pages/Home';
import NotFound from '../src/pages/NotFound';
import Header from './components/Header';
import './scss/app.scss';

function App() {
	const [searchValue, setSearchValue] = React.useState('');

	return (
		<div className='wrapper'>
			<Header searchValue={searchValue} setSearchValue={setSearchValue} />
			<div className='content'>
				<Routes>
					<Route path='/' element={<Home searchValue={searchValue} />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
