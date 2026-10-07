import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, onChangePage }) => {
	return (
		<div>
			<ReactPaginate
				className={styles.root}
				breakLabel='...'
				nextLabel='>'
				previousLabel='<'
				forcePage={currentPage - 1}
				onPageChange={event => onChangePage(event.selected + 1)}
				pageRangeDisplayed={4}
				pageCount={3}
				renderOnZeroPageCount={null}
			/>
		</div>
	);
};
export default Pagination;
