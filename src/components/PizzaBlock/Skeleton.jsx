import ContentLoader from 'react-content-loader';
import React from "react";

const Skeleton = props => (
	<ContentLoader
	className='pizza-block'
		speed={2}
		width={280}
		height={500}
		viewBox='0 0 280 500'
		backgroundColor='#ebebeb'
		foregroundColor='#d1d1d1'
		{...props}
	>
		<circle x = '9' cx='127' cy='125' r='125' />
		<rect x='0' y='296' rx='10' ry='10' width='280' height='25' />
		<rect x='0' y='335' rx='10' ry='10' width='280' height='88' />
		<rect x='0' y='432' rx='12' ry='12' width='104' height='41' />
		<rect x='125' y='433' rx='30' ry='30' width='152' height='45' />
	</ContentLoader>
);

export default Skeleton;
