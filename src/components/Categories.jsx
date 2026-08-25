function Categories({ value, onChangeCategory }) {
	const categoriesPizza = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	return (
		<div className='categories'>
			<ul>
				{categoriesPizza.map((categoryName, i) => (
					<li
						key={i}
						onClick={() => onChangeCategory(i)}
						className={value === i ? 'active' : ''}
					>
						{categoryName}
					</li>
				))}
			</ul>
		</div>
	);
}
export default Categories;
