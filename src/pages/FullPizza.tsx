import axios from 'axios';
import React from 'react';
import { useParams, useNavigate } from 'react-router';

const FullPizza: React.FC = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [pizza, setPizza] = React.useState<{
		imageUrl: string;
		title: string;
		price: number;
	}>({ imageUrl: '', title: '', price: 0  });
	React.useEffect(() => {
		async function fetchPizza() {
			try {
				const { data } = await axios.get(
					'https://6a819e35400f94b23c6f89a1.mockapi.io/items/' + id,
				);
				setPizza(data);
			} catch (error) {
				alert('Ошибка при получении пицц');
				navigate('/');
			}
		}
		fetchPizza();
	}, []);

	if (!pizza) {
		return <div className='container'>Loading...</div>;
	}

	return (
		<div className='container'>
			<img src={pizza.imageUrl} alt={pizza.title} />
			<h2>{pizza.title}</h2>
			<h4>{pizza.price} ₽</h4>
		</div>
	);
};
export default FullPizza;
