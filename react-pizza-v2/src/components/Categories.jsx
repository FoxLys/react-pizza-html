import React from 'react';

function Categories() {
	const categoriesPizza = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	const [activeIdex, setActiveIdex] = React.useState(0);

	const onClickCategory = index => {
		setActiveIdex(index);
	};

	return (
		<div className='categories'>
			<ul>
				{categoriesPizza.map((name, index) => (
					<li
						key={index}
						onClick={() => onClickCategory(index)}
						className={activeIdex === index ? 'active' : ''}
					>
						{name}
					</li>
				))}
				{/* <div>
					<li
						onClick={() => onClickCategory(1)}
						className={activeIdex === 1 ? 'active' : ''}
					>
						Мясные
					</li>
					<li
						onClick={() => onClickCategory(2)}
						className={activeIdex === 2 ? 'active' : ''}
					>
						Вегетарианская
					</li>
					<li
						onClick={() => onClickCategory(3)}
						className={activeIdex === 3 ? 'active' : ''}
					>
						Гриль
					</li>
					<li
						onClick={() => onClickCategory(4)}
						className={activeIdex === 4 ? 'active' : ''}
					>
						Острые
					</li>
					<li
						onClick={() => onClickCategory(5)}
						className={activeIdex === 5 ? 'active' : ''}
					>
						Закрытые
					</li>
				</div> */}
			</ul>
		</div>
	);
}
export default Categories;
