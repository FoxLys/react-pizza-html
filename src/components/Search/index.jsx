import { debounce } from 'lodash';
import React from 'react';
import style from './Search.module.scss';

export const Search = ({ searchValue, setSearchValue }) => {
	const debouncedSearch = React.useMemo(() =>
		debounce(searchTerm => {
			console.log('Шукаємо:', searchTerm);
		}, 500),
	);

	const onChangeSearch = e => {
		const value = e.target.value;
		debouncedSearch(value);
	};

	return (
		<div className={style.root}>
			<svg
				className={style.icon}
				enableBackground='new 0 0 53 53'
				id='EditableLine'
				version='1.1'
				viewBox='0 0 32 32'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle
					cx='14'
					cy='14'
					fill='none'
					id='XMLID_42_'
					r='9'
					stroke='#000000'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
					strokeWidth='2'
				></circle>
				<line
					fill='none'
					id='XMLID_44_'
					stroke='#000000'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
					strokeWidth='2'
					x1='27'
					x2='20.366'
					y1='27'
					y2='20.366'
				></line>
			</svg>
			<input
				onChange={onChangeSearch}
				className={style.input}
				placeholder='Поиск pizza...'
			/>
		</div>
	);
};

export default Search;
