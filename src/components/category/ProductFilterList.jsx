import {forwardRef, useState} from 'react';
import {PrimaryButton, SecondaryButton} from '@/components/category/ProductFilterButton';
import {ProductFilterBrand, ProductFilterPrice, ProductFilterBenefit, ProductFilterColor, ProductFilterDiscount} from '@/components/category/ProductFilter';

/**
 *  ProductFilterList component
 * */

function ProductFilterList({brands, color, onFilter, onAssign, onReset}, ref) {
	const [activeFilter, setActiveFilter] = useState('BRAND');

	return (
		<>
			<div className="flex justify-between border-y-[1px] border-l-grey-200 bg-[#fbfbfb] px-6 py-4 text-lg font-semibold">
				<h4 className="filter-button">
					FILTER
					<button
						className="float-right ml-4 mt-[6.5px] h-[11px] w-[11px]"
						style={{
							background: `url("https://static.wconcept.co.kr/web/images/common/spr-common.png") 0 -60px no-repeat`,
						}}
						type="button"
					></button>
				</h4>
				<ul className="filter-nav flex gap-24">
					<li>
						<button type="button" onClick={() => setActiveFilter('BRAND')} style={{color: activeFilter === 'BRAND' ? '#fa5500' : 'initial'}}>
							BRAND
						</button>
					</li>

					<li>
						<button type="button" onClick={() => setActiveFilter('BENEFIT')} style={{color: activeFilter === 'BENEFIT' ? '#fa5500' : 'initial'}}>
							BENEFIT
						</button>
					</li>
					<li>
						<button type="button" onClick={() => setActiveFilter('COLOR')} style={{color: activeFilter === 'COLOR' ? '#fa5500' : 'initial'}}>
							COLOR
						</button>
					</li>
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

							{/* <li key={benefit} className="flex pl-4">
								{activeFilter === 'BENEFIT' && <ProductFilterBenefit brandName={benefit} onFilter={onFilter} />}
							</li>

							<li key={discount} className="flex pl-4">
								{activeFilter === 'DISCOUNT' && <ProductFilterDiscount brandName={discount} onFilter={onFilter} />}
							</li> */}
						</>
					))}

					{/* {color.map((color) => (
						<li key={color} className="flex pl-4">
							{activeFilter === 'COLOR' && <ProductFilterColor colorName={color} onFilter={onFilter} />}
						</li>
					))} */}
					
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
