import ProductCategory from '@/components/category/ProductCategory';
import ProductFilter from '@/components/category/ProductFilter';
import ProductsItems from '@/components/category/ProductItems';
import ProductPageNation from '@/components/category/ProductPageNation';
import ProductSort from '@/components/category/ProductSort';
// import { NavLink, useNavigate } from 'react-router-dom';

/**
 *  Category Page
 * */

function Category() {
	return(
	<main className="m-auto mt-6 flex max-w-[1980px] px-2">
		<ProductCategory/>

		<section className="w-4/5">
			<nav className="mb-6 text-xs">
				<ul className="flex flex-row">
					<li>
						<button type="button">HOME ＞ </button>
					</li>
					<li>
						<button type="button">MEN</button>
					</li>
				</ul>
			</nav>

			<ProductFilter/>

			<div className="product-quantity border-t-2 border-black py-4 text-left">
				<span className="text-sm font-light text-black">
					<em className="a11y text-mlg font-normal not-italic">192</em> 개의 상품
				</span>

				<ProductSort/>
			</div>
			
			<ProductsItems />
			<ProductPageNation />
		</section>
	</main>
	);
}

export default Category;
