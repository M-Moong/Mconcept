import ProductInfo from '@/components/common/ProductInfo';


/**
 *  ProductItems component
 * */

const style = ['text-left', 'ml-1', 'float-right'];

function ProductItems({data}) {
	return (
		<>
			<div className="products mb-20 grid grid-cols-6 grid-rows-2 gap-6">
				{data ? (
					data?.map((item) => {
						return (
							<div key={item.id}>
								<ProductInfo item={item} style={style} />
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
