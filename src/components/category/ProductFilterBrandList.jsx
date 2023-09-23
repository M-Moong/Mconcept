import {forwardRef, useState} from 'react';
import {PrimaryButton, SecondaryButton} from '@/components/category/ProductFilterButton';
import {ProductFilterBrand, ProductFilterPrice, ProductFilterBenefit, ProductFilterColor, ProductFilterDiscount} from '@/components/category/ProductFilter';
import { Link } from 'react-router-dom';

/**
 *  ProductFilterList component
 * */

function ProductFilterList({brands, onFilter, onAssign, onReset}, ref) {
	const [activeFilter, setActiveFilter] = useState('BRAND');

	return (
		<>
			<div className="flex justify-between border-y-[1px] border-l-grey-200 bg-[#fbfbfb] px-6 py-4 text-lg font-semibold">
				<h4 className="filter-button">
					FILTER
				</h4>
				<ul className="filter-nav flex gap-24">
					<Link to="/categoryBrand">
						<button type="button" onClick={() => setActiveFilter('BRAND')} style={{color: activeFilter === 'BRAND' ? '#fa5500' : 'initial'}}>
							BRAND
						</button>
					</Link>

					<li>
						<button type="button" onClick={() => setActiveFilter('BENEFIT')} style={{color: activeFilter === 'BENEFIT' ? '#fa5500' : 'initial'}}>
							BENEFIT
						</button>
					</li>
					<Link to="/categoryColor">
						<button type="button" onClick={() => setActiveFilter('COLOR')} style={{color: activeFilter === 'COLOR' ? '#fa5500' : 'initial'}}>
							COLOR
						</button>
					</Link>
					<li>
						<button type="button" onClick={() => setActiveFilter('DISCOUNT')} style={{color: activeFilter === 'DISCOUNT' ? '#fa5500' : 'initial'}}>
							DISCOUNT
						</button>
					</li>
				</ul>
			</div>

			<div ref={ref} className="bg-[#fbfbfb] p-8">
				<ul className="brand mb-8 flex flex-wrap border border-grey-100 bg-white px-4 py-6">
					{brands.map((brandName) => (
						<>
							<li key={brandName} className="flex pl-4">
								{activeFilter === 'BRAND' && <ProductFilterBrand brandName={brandName} onFilter={onFilter} />}
							</li>
						</>
					))}
				</ul>

				<div role="group" className="button text-center">
					<SecondaryButton onClick={onReset}>초기화</SecondaryButton>
					<PrimaryButton onClick={onAssign}>필터적용</PrimaryButton>
				</div>
			</div>
		</>
	);
}

export default forwardRef(ProductFilterList);

{
	/* <li key={benefit} className="flex pl-4">
								{activeFilter === 'BENEFIT' && <ProductFilterBenefit brandName={benefit} onFilter={onFilter} />}
							</li>

							<li key={discount} className="flex pl-4">
								{activeFilter === 'DISCOUNT' && <ProductFilterDiscount brandName={discount} onFilter={onFilter} />}
							</li> */
}
