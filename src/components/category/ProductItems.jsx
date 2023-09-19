import pb from '@/api/pocketbase';
import {useEffect, useState} from 'react';
import ProductInfo from '../ProductInfo';

/**
 *  ProductItems component
 * */

function ProductItems() {
	const [data, setData] = useState([]);

	useEffect(() => {
		pb.autoCancellation(false);
		async function getProducts() {
			try {
				const readRecordList = await pb.collection('products').getFullList();
				setData(readRecordList);
			} catch (error) {
				console.log(error);
				throw new Error('error');
			}
		}
		getProducts();
	}, []);

	return (
		<>
			<div className="products mb-20 grid grid-cols-6 grid-rows-2 gap-6">
				{data ? (
					data?.map((item) => {
						return (
							<div key={item.id}>
								<ProductInfo item={item} />
							</div>
						);
					})
				) : (
					<div>ERROR</div>
				)}
			</div>
		</>
	);
}

export default ProductItems;
