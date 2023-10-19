
import React, { useContext } from 'react';
import  {ProductContext}  from '../components/Context/ProductContext.jsx';
import carro from '../../public/image/maletas.png'
import { Link } from 'react-router-dom';

 const Filter = () => {
	const { active, handleCheckbox } = useContext(ProductContext);

	return (
		<></>

		/*<div className={`flex-grow bg-gray-200 text-gray-500 my-2 py-2 ${active ? 'active' : 'text-xl font-medium'}`}>
			<div className='flex flex-col items-center justify-center gap-2 md:flex-row'>

				<div className='p-1 text-base font-medium md:text-xl'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='accesories'
						id='accesories'
					/>
					<label className='pl-1' htmlFor='accesories'>Accesories</label>
				</div>

				<div className='p-1 text-base font-medium md:text-xl'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='waistpacks'
						id='waistpacks'
					/>
					<label className='pl-1' htmlFor='waistpacks'>Waistpacks</label>
				</div>
				<div className='p-1 text-base font-medium md:text-xl'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='pets'
						id='pets'
					/>
					<label className='pl-1' htmlFor='pets'>Pets</label>
				</div>
				<div className='p-1 text-base font-medium md:text-xl'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='backpacks'
						id='backpacks'
					/>
					<label className='pl-1' htmlFor='backpacks'>Backpacks</label>
				</div>
				<div className='p-1 text-base font-medium md:text-xl'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='suitcases'
						id='suitcases'
					/>
					<label className='pl-1' htmlFor='suitcases'>Suitcases</label>
				</div>

				<Link to={'/cart'} className='p-1 w-14 md:w-20'>
					<img src={carro} alt="" />
				</Link>
				
			</div>
		</div> */
	);
};
export default Filter;