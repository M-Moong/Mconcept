import ProductCheckBox from '@/components/category/ProductCheckBox';
import {PrimaryButton, SecondaryButton} from '@/components/category/ProductFilterButton';

/**
 *  ProductFilter component
 * */

function ProductFilter() {
	return (
		<>
			<div className="flex justify-between border-y-[1px] border-l-grey-200 bg-[#fbfbfb] px-6 py-4 text-lg font-semibold">
				<h4>
					FILTER
					<button
						className="float-right ml-4 mt-[6.5px] h-[11px] w-[11px]"
						style={{
							background: `url("https://static.wconcept.co.kr/web/images/common/spr-common.png") 0 -60px no-repeat`,
						}}
						type="button"
					></button>
				</h4>
				<ul className="flex gap-24">
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
				<ul className="price flex justify-center mb-8 border border-grey-100 bg-white px-4 py-6">
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>5만원 이하</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>5만원~10만원</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>10만원~20만원</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>20만원~30만원</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>30만원~50만원</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>50~100만원</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>100만원 이상</span></li>
				</ul>
				<ul className="hidden benefit flex justify-center mb-8 border border-grey-100 bg-white px-4 py-6">
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>뉴시즌</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>단독판매</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>쿠폰</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>셀럽착용</span></li>
				</ul>
				<ul className="hidden color flex flex-wrap mb-8 border border-grey-100 bg-white px-4 py-6">
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>BEIGE</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>BLACK</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>BLUE</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>BROWN</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>BURGUNDY</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>CHARCOAL</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>GREEN</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>GREY</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>KHAKII</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>NAVY</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>ORANGE</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>PINK</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>PURPLE</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>RED</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>WHITE</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>YELLOW</span></li>
				</ul>
				<ul className="hidden discount flex justify-center mb-8 border border-grey-100 bg-white px-4 py-6">
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>~5%</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>5%~10%</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>10%~20%</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>20%~30%</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>30%~50%</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>50%~100%</span></li>
					<li className="flex pl-4"><ProductCheckBox /><span className='ml-1 text-base font-light text-primary'>100%~</span></li>
				</ul>

				<ul className='button text-center'>
					<SecondaryButton>초기화</SecondaryButton>
					<PrimaryButton>필터적용</PrimaryButton>
				</ul>
			</div>
		</>
	);
}

export default ProductFilter;
