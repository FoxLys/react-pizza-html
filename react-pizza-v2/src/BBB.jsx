import React from 'react';
const Number = () => {
	const [count, setCount] = React.useState(0);

		React.useEffect(() => {
			console.log('Did MOUNT');
			return () => {
				console.log('will unMOUNT');
			};
		});
	
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => setCount(prev => prev + 1)}>+</button>
		</div>
	);
};

export default Number;
