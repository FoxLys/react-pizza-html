import ReactPaginate from 'react-paginate';


import styles from './Pagination.module.scss' ;

const Pagination = ({ currentPage, onChangePage, pageCount }) => {
	return (
		<div>
			<ReactPaginate
				className={styles.root}
				breakLabel='...'
				nextLabel='>'
				forcePage={currentPage - 1}
				onPageChange={event => onChangePage(event.selected + 1)}
				pageRangeDisplayed={4}
				pageCount={pageCount}
				previousLabel='<'
				renderOnZeroPageCount={null}
			/>
		</div>
	);
};

export default Pagination;
