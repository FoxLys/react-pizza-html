import { Route, Routes } from 'react-router';

import NotFound from '../src/pages/NotFound';
import Home from '../src/pages/Home';
import Cart from '../src/pages/Cart';
import Header from './components/Header';
import './scss/app.scss';

// import pizzas from './assets/pizza.json';

function App() {
	// const pathname = window.location.pathname;
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					{/* {pathname === '/' && <Home />} */}
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
