
import React, { useContext } from 'react';
import  {ProductContext}  from '../components/Context/ProductContext.jsx';
import carro from '../../public/image/maletas.png'
import { Link } from 'react-router-dom';

 const Filter = () => {
	const { active, handleCheckbox } = useContext(ProductContext);

	return (
		<div className={` flex-grow w-full bg-gray-200 text-gray-500 ${active ? 'active' : 'p-1 text-2xl font-medium my-2 mx-4'}`}>
			<div className='flex flex-col md:flex-row items-center '>

				<div className='p-1 text-2xl font-medium my-2 mx-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='accesories'
						id='accesories'
					/>
					<label htmlFor='accesories'>accesories</label>
				</div>

				<div className='p-1 text-2xl font-medium my-2 mx-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='waistpacks'
						id='waistpacks'
					/>
					<label htmlFor='waistpacks'>waistpacks</label>
				</div>
				<div className='p-1 text-2xl font-medium my-2 mx-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='pets'
						id='pets'
					/>
					<label htmlFor='pets'>pets</label>
				</div>
				<div className='p-1 text-2xl font-medium my-2 mx-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='backpacks'
						id='backpacks'
					/>
					<label htmlFor='backpacks'>backpacks</label>
				</div>
				<div className='p-1 text-2xl font-medium my-2 mx-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='suitcases'
						id='suitcases'
					/>
					<label htmlFor='suitcases'>suitcases</label>
				</div>

				<Link to={'/cart'} className='p-1 w-20 my-2 mx-4'>
					<img src={carro} alt="" />
				</Link>
				
			</div>
		</div>
	);
};
export default Filter;