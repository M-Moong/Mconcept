import pb from '@/api/pocketbase';
import {useEffect, useState} from 'react';
import {PrimaryButton, SecondaryButton} from '@/components/category/ProductFilterButton';
import ProductFilter from '@/components/category/ProductFilter';

/**
 *  ProductFilterList component
 * */

function ProductFilterList() {
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
						<button type="button">BRAND</button>
					</li>
					<li>
						<button type="button">PRICE</button>
					</li>
					<li>
						<button type="button">BENEFIT</button>
					</li>
					<li>
						<button type="button">COLOR</button>
					</li>
					<li>
						<button type="button">DISCOUNT</button>
					</li>
				</ul>
			</div>

			<div className="bg-[#fbfbfb] p-8">
				{data ? (
					data
						?.filter((item) => item.brand)
						.map((item) => {
							return (
								<div key={item.id}>
								<ul className="brand mb-8 flex justify-center border border-grey-100 bg-white px-4 py-6">
									<li className="flex pl-4"></li>
									<ProductFilter item={item} />
								</ul>
								</div>
							);
						})
				) : (
					<div>ERROR</div>
				)}

				<ul className="button text-center">
					<SecondaryButton>초기화</SecondaryButton>
					<PrimaryButton>필터적용</PrimaryButton>
				</ul>
			</div>
		</>
	);
}

export default ProductFilterList;
