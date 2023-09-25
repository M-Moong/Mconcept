import ProductInfo from '@/components/common/ProductInfo';
import Spinner from '@/components/common/Spinner';

/**
 *  ProductOuter component
 * */

const style = ['text-left', 'ml-1', 'float-right'];

function ProductOuter({data, id}) {
	return (
		<div className="products mb-20 grid grid-cols-6 grid-rows-2 gap-6">
			{data ? (
				data
					?.filter((item) => ['아우터', '자켓', '점퍼', '패딩', '코트'].includes(item.category))
					.map((item) => {
						return <ProductInfo item={item} style={style} />;
					})
			) : (
				<Spinner />
			)}
		</div>
	);
}

export default ProductOuter;
