import ProductInfo from '@/components/common/ProductInfo';

/**
 *  ProductTshirts component
 * */

const style = ['text-left', 'ml-1', 'float-right'];

function ProductTshirts({data}) {
	return (
		<>
			<div className="products mb-20 grid grid-cols-6 grid-rows-2 gap-6">
				{data ? (
					data
						?.filter((item) => item.category === '티셔츠')
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

export default ProductTshirts;
