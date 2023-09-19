import ProductCategoryItem from "@/components/category/ProductCategoryItem";

/**
 *  ProductCategory component
 * */

function ProductCategory() {
	return (
		<section className="mr-6 w-1/5">
			<h3 className="border-b border-black py-4 text-2xl font-bold tracking-widest">
				<span className="block text-lg font-semibold tracking-tight">MEN</span>APPAREL
			</h3>

			<ProductCategoryItem/>

		</section>
  );
}

export default ProductCategory;
