import ProductCheckBox from '@/components/category/ProductCheckBox';

/**
 *  ProductFilter component
 * */

function ProductFilter({item}) {
	return (
		<>
			<ProductCheckBox />
			<span className="ml-1 text-base font-medium text-primary">{item.brand}</span>
		</>
	);
}

export default ProductFilter;

{/* <ul className="price mb-8 flex hidden justify-center border border-grey-100 bg-white px-4 py-6">
<li className="flex pl-4">
	<ProductCheckBox />
	<span className="ml-1 text-base font-medium text-primary">5만원 이하</span>
</li>
<li className="flex pl-4">
	<ProductCheckBox />
	<span className="ml-1 text-base font-medium text-primary">5만원~10만원</span>
</li>
<li className="flex pl-4">
	<ProductCheckBox />
	<span className="ml-1 text-base font-medium text-primary">10만원~20만원</span>
</li>
<li className="flex pl-4">
	<ProductCheckBox />
	<span className="ml-1 text-base font-medium text-primary">20만원~30만원</span>
</li>
<li className="flex pl-4">
	<ProductCheckBox />
	<span className="ml-1 text-base font-medium text-primary">30만원~50만원</span>
</li>
<li className="flex pl-4">
	<ProductCheckBox />
	<span className="ml-1 text-base font-medium text-primary">50~100만원</span>
</li>
<li className="flex pl-4">
	<ProductCheckBox />
	<span className="ml-1 text-base font-medium text-primary">100만원 이상</span>
</li>
</ul>
<ul className="benefit-label mb-8 flex hidden justify-center border border-grey-100 bg-white px-4 py-6">
<li className="flex pl-4">
	<ProductCheckBox />
	<span className="ml-1 text-base font-medium text-primary">뉴시즌</span>
</li>
</ul>
<ul className="color mb-8 flex hidden flex-wrap border border-grey-100 bg-white px-4 py-6">
<li className="flex pl-4">
	<ProductCheckBox />
	<span className="ml-1 text-base font-medium text-primary">BEIGE</span>
</li>
</ul>
<ul className="discount mb-8 flex hidden justify-center border border-grey-100 bg-white px-4 py-6">
<li className="flex pl-4">
	<ProductCheckBox />
	<span className="ml-1 text-base font-medium text-primary">~5%</span>
</li>
<li className="flex pl-4">
	<ProductCheckBox />
	<span className="ml-1 text-base font-medium text-primary">5%~10%</span>
</li>
<li className="flex pl-4">
	<ProductCheckBox />
	<span className="ml-1 text-base font-medium text-primary">10%~20%</span>
</li>
<li className="flex pl-4">
	<ProductCheckBox />
	<span className="ml-1 text-base font-medium text-primary">20%~30%</span>
</li>
<li className="flex pl-4">
	<ProductCheckBox />
	<span className="ml-1 text-base font-medium text-primary">30%~50%</span>
</li>
<li className="flex pl-4">
	<ProductCheckBox />
	<span className="ml-1 text-base font-medium text-primary">50%~100%</span>
</li>
<li className="flex pl-4">
	<ProductCheckBox />
	<span className="ml-1 text-base font-medium text-primary">100%~</span>
</li>
</ul> */}