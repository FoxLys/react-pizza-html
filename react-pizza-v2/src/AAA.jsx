import React from 'react';
import './scss/AAA.scss';
import BBB from "./BBB";

function AAA() {
	const [number, setNumber] = React.useState([1, 4, 5]);
	const [isVisible, setIsVisible] = React.useState(true);

	const addNumber = () => {
		const randomNumbers = Math.round(Math.random() * 10);
		const newRandomArray = [...number, randomNumbers];
		setNumber(newRandomArray);
	};

	return (
		<div>

			{/*  скрития*/}
			{isVisible && (
				<ul>
					{number.map((num, index) => (
						<li key={index}>{num}</li>
					))}
				</ul>
			)}
			<button onClick={() => addNumber()}>new number</button>
			<div>
				{/* Кнопка */}
				<button onClick={() => setIsVisible(prev => !prev)}>
					{isVisible ? 'Скрыть список' : 'Показать список'}
				</button>
			</div>
		</div>
	);
}

export default AAA;
