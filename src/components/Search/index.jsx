/** @type {React.RefObject<HTMLInputElement>} */
import style from './Search.module.scss';
import debounce from 'lodash.debounce';
import React from 'react';

import { SearchContext } from '../../App.js';

export const Search = () => {
	const [value, setValue] = React.useState('');
	const { searchValue, setSearchValue } = React.useContext(SearchContext);
	const inputRef = React.useRef();

	const onClickClearInput = e => {
		e.preventDefault(); //
		setSearchValue('');
		setValue('');
		inputRef.current.focus();
	};

	const updateSearchValue = React.useCallback(
		debounce(str => {
			setSearchValue(str);
		}, 1000),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);

	const onChangeInput = event => {
		setValue(event.target.value);
		updateSearchValue(event.target.value);
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
				ref={inputRef}
				value={value}
				onChange={onChangeInput}
				className={style.input}
				placeholder='Поиск pizza...'
			/>
			{searchValue && (
				<button
					type='button'
					onMouseDown={onClickClearInput}
					className={style.clearIcon}
					aria-label='clear Search'
				>
					<svg
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
					>
						<path
							d='M5 5L19 19M19 5L5 19'
							stroke='currentColor'
							strokeWidth='2.5'
							strokeLinecap='round'
						/>
					</svg>
				</button>
			)}
		</div>
	);
};

export default Search;
