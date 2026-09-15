import style from './Search.module.scss';

export const Search = ({ searchValue, setSearchValue }) => {
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
				value={searchValue}
				onChange={event => setSearchValue(event.target.value)}
				className={style.input}
				placeholder='Поиск pizza...'
			/>
			{searchValue && (
				<button
					type='button'
					onMouseDown={e => {
						e.preventDefault(); // дуже важливо!
						setSearchValue('');
					}}
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
