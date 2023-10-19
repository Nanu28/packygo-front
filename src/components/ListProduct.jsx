/* import React, { useContext } from 'react'
import { ProductContext } from './Context/ProductContext.jsx'
import CardProduct from '../components/CardProduct.jsx'


const ListProduct = () => {
    const {allProduct} = useContext(ProductContext)
  return (
    <>
    <div className='w-full  gap-20 flex flex-wrap'>
        {allProduct.map(product => <CardProduct product={product} key={product._id} />)}

    </div>
    </>
  )
}

export default ListProduct
 */


import React, { useContext } from 'react';
import { ProductContext } from '../components/Context/ProductContext.jsx';
// import  CardProduct  from '../components/CardProduct.jsx';
// import  Loader  from '../components/Loader.jsx';

export const ListProduct = () => {
	const { allProduct, loading, filteredProduct } =
		useContext(ProductContext);

	return (
		<>
			{loading ? (
				// <Loader />
				 <p> pepe </p>
			) : ( 
				<div className='card-list-Product container'>
					{filteredProduct.length ? (
						<>
							{filteredProduct.map(product => (
								<CardProduct Product={product} key={product._id} />
							))}
						</>
					) : (
						<>
							{allProduct.map(product => (
								<CardProduct product={product} key={product._id} />
							))}
						</>
					)}
				</div>
			)}
		</>
	);
};
export default ListProduct 