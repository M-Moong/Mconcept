import pb from '@/api/pocketbase';
import {useEffect, useState} from 'react';
import ProductInfo from '@/components/common/ProductInfo';

/**
 *  ProductJacket component
 * */

const style = ['text-left', 'ml-1', 'float-right'];

function ProductJacket({data}) {
	return (
		<>
			<div className="products mb-20 grid grid-cols-6 grid-rows-2 gap-6">
				{data ? (
					data
						?.filter((item) => item.category === '자켓')
						.map((item) => {
							return <ProductInfo item={item} style={style} />;
						})
				) : (
					<Spinner />
				)}
			</div>
		</>
	);
}

export default ProductJacket;
