import btnNext from '../../assets/images/detail/detail_btn_next.png';
import btnPrev from '../../assets/images/detail/detail_btn_prev.png';
import list02_1 from '../../assets/images/detail/list02/image_1.png';
import list02_2 from '../../assets/images/detail/list02/image_2.png';
import list02_3 from '../../assets/images/detail/list02/image_3.png';
import list02_4 from '../../assets/images/detail/list02/image_4.png';
import list02_5 from '../../assets/images/detail/list02/image_5.png';
import list02_6 from '../../assets/images/detail/list02/image_6.png';

function DetailsBeauty() {
	return (
		<section className="mb-[160px]">
			<div className="flex flex-row justify-between">
				<h6 className="font-mlg mb-4 font-semibold">Pick your beauty items</h6>
				<ul className="flex flex-row justify-center">
					<li>
						<button>
							<img src={btnPrev} alt="" />
						</button>
					</li>
					<li className="mt-[7px] h-[14px] w-[1px] bg-[#b5b5b5]"></li>
					<li>
						<button>
							<img src={btnNext} alt="" />
						</button>
					</li>
				</ul>
			</div>
			<div className="flex flex-row justify-between">
				<ul className="w-[195px]">
					<li className="mb-5">
						<img src={list02_1} alt="" />
					</li>
					<li className="mb-2 ml-1.5 mr-1 text-base font-semibold">FLUKE</li>
					<li className="text-truncate mb-4 ml-1.5 mr-1 h-[32px] text-sm text-secondary">플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
					<li className="relative ml-1.5 mr-1">
						<span className="mr-1 text-lg font-semibold">44,500</span>
						<span className="text-sm text-grey-300 line-through">75,000</span>
						<span className="absolute right-0 text-lg font-semibold text-tertiary">41&#37;</span>
					</li>
				</ul>

				<ul className="w-[195px]">
					<li className="mb-5">
						<img src={list02_2} alt="" />
					</li>
					<li className="mb-2 ml-1.5 mr-1 text-base font-semibold">FLUKE</li>
					<li className="text-truncate mb-4 ml-1.5 mr-1 h-[32px] text-sm text-secondary">플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
					<li className="relative ml-1.5 mr-1">
						<span className="mr-1 text-lg font-semibold">44,500</span>
						<span className="text-sm text-grey-300 line-through">75,000</span>
						<span className="absolute right-0 text-lg font-semibold text-tertiary">41&#37;</span>
					</li>
				</ul>

				<ul className="w-[195px]">
					<li className="mb-5">
						<img src={list02_3} alt="" />
					</li>
					<li className="mb-2 ml-1.5 mr-1 text-base font-semibold">FLUKE</li>
					<li className="text-truncate mb-4 ml-1.5 mr-1 h-[32px] text-sm text-secondary">플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
					<li className="relative ml-1.5 mr-1">
						<span className="mr-1 text-lg font-semibold">44,500</span>
						<span className="text-sm text-grey-300 line-through">75,000</span>
						<span className="absolute right-0 text-lg font-semibold text-tertiary">41&#37;</span>
					</li>
				</ul>

				<ul className="w-[195px]">
					<li className="mb-5">
						<img src={list02_4} alt="" />
					</li>
					<li className="mb-2 ml-1.5 mr-1 text-base font-semibold">FLUKE</li>
					<li className="text-truncate mb-4 ml-1.5 mr-1 h-[32px] text-sm text-secondary">플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
					<li className="relative ml-1.5 mr-1">
						<span className="mr-1 text-lg font-semibold">44,500</span>
						<span className="text-sm text-grey-300 line-through">75,000</span>
						<span className="absolute right-0 text-lg font-semibold text-tertiary">41&#37;</span>
					</li>
				</ul>

				<ul className="w-[195px]">
					<li className="mb-5">
						<img src={list02_5} alt="" />
					</li>
					<li className="mb-2 ml-1.5 mr-1 text-base font-semibold">FLUKE</li>
					<li className="text-truncate mb-4 ml-1.5 mr-1 h-[32px] text-sm text-secondary">플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
					<li className="relative ml-1.5 mr-1">
						<span className="mr-1 text-lg font-semibold">44,500</span>
						<span className="text-sm text-grey-300 line-through">75,000</span>
						<span className="absolute right-0 text-lg font-semibold text-tertiary">41&#37;</span>
					</li>
				</ul>

				<ul className="w-[195px]">
					<li className="mb-5">
						<img src={list02_6} alt="" />
					</li>
					<li className="mb-2 ml-1.5 mr-1 text-base font-semibold">FLUKE</li>
					<li className="text-truncate mb-4 ml-1.5 mr-1 h-[32px] text-sm text-secondary">플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
					<li className="relative ml-1.5 mr-1">
						<span className="mr-1 text-lg font-semibold">44,500</span>
						<span className="text-sm text-grey-300 line-through">75,000</span>
						<span className="absolute right-0 text-lg font-semibold text-tertiary">41&#37;</span>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default DetailsBeauty;
