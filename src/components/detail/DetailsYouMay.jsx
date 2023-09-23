import btnNext from '../../assets/images/detail/detail_btn_next.png';
import btnPrev from '../../assets/images/detail/detail_btn_Prev.png';
import list01_1 from '../../assets/images/detail/list01/image_1.png';
import list01_2 from '../../assets/images/detail/list01/image_2.png';
import list01_3 from '../../assets/images/detail/list01/image_3.png';
import list01_4 from '../../assets/images/detail/list01/image_4.png';
import list01_5 from '../../assets/images/detail/list01/image_5.png';
import list01_6 from '../../assets/images/detail/list01/image_6.png';

function DetailsYouMay() {
	return (
		<section className="mb-[180px]">
			<div className="flex flex-row justify-between">
				<h6 className="font-mlg mb-4 font-semibold">You may also like</h6>
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
						<img src={list01_1} alt="" />
					</li>
					<li className="mb-2 ml-1.5 mr-1 text-base font-semibold">Dunst for WOMEN</li>
					<li className="text-truncate mb-4 ml-1.5 mr-1 h-[32px] text-sm text-secondary">UNISEX LEATHER LOGO ZIP-UP HOODIE MELANGE GREY_UDTS3C108G2</li>
					<li className="relative ml-1.5 mr-1">
						<span className="mr-1 text-lg font-semibold">94,050</span>
						<span className="text-sm text-grey-300 line-through">99,000</span>
						<span className="absolute right-0 text-lg font-semibold text-tertiary">20&#37;</span>
					</li>
				</ul>

				<ul className="w-[195px]">
					<li className="mb-5">
						<img src={list01_2} alt="" />
					</li>
					<li className="mb-2 ml-1.5 mr-1 text-base font-semibold">Dunsta for WOMEN</li>
					<li className="text-truncate mb-4 ml-1.5 mr-1 h-[32px] text-sm text-secondary">UNISEX NEOPRENE ZIP-UP HOODIE BLACK_UDJU3C116BK</li>
					<li className="relative ml-1.5 mr-1">
						<span className="mr-1 text-lg font-semibold">122,550</span>
						<span className="text-sm text-grey-300 line-through">129,000</span>
						<span className="absolute right-0 text-lg font-semibold text-tertiary">5&#37;</span>
					</li>
				</ul>

				<ul className="w-[195px]">
					<li className="mb-5">
						<img src={list01_3} alt="" />
					</li>
					<li className="mb-2 ml-1.5 mr-1 text-base font-semibold">Dunst for WOMEN</li>
					<li className="text-truncate mb-4 ml-1.5 mr-1 h-[32px] text-sm text-secondary">UNISEX LEATHER LOGO ZIP-UP HOODIE OATMEAL MELANGE_UDTS3C108I1</li>
					<li className="relative ml-1.5 mr-1">
						<span className="mr-1 text-lg font-semibold">94,050</span>
						<span className="text-sm text-grey-300 line-through">99,000</span>
						<span className="absolute right-0 text-lg font-semibold text-tertiary">5&#37;</span>
					</li>
				</ul>

				<ul className="w-[195px]">
					<li className="mb-5">
						<img src={list01_4} alt="" />
					</li>
					<li className="mb-2 ml-1.5 mr-1 text-base font-semibold">INSTANTTFUNK</li>
					<li className="text-truncate mb-4 ml-1.5 mr-1 h-[32px] text-sm text-secondary">스탠다드 로고 후드 - 네이비</li>
					<li className="relative ml-1.5 mr-1">
						<span className="mr-1 text-lg font-semibold">98,800</span>
					</li>
				</ul>

				<ul className="w-[195px]">
					<li className="mb-5">
						<img src={list01_5} alt="" />
					</li>
					<li className="mb-2 ml-1.5 mr-1 text-base font-semibold">THE ASHLYNN</li>
					<li className="text-truncate mb-4 ml-1.5 mr-1 h-[32px] text-sm text-secondary">BACKPACK PAM HOODIE</li>
					<li className="relative ml-1.5 mr-1">
						<span className="mr-1 text-lg font-semibold">129,200</span>
						<span className="text-sm text-grey-300 line-through">152,000</span>
						<span className="absolute right-0 text-lg font-semibold text-tertiary">15&#37;</span>
					</li>
				</ul>

				<ul className="w-[195px]">
					<li className="mb-5">
						<img src={list01_6} alt="" />
					</li>
					<li className="mb-2 ml-1.5 mr-1 text-base font-semibold">THE ASHLYNN</li>
					<li className="text-truncate mb-4 ml-1.5 mr-1 h-[32px] text-sm text-secondary">BEANIE PAM CROP HOODIE</li>
					<li className="relative ml-1.5 mr-1">
						<span className="mr-1 text-lg font-semibold">137,700</span>
						<span className="text-sm text-grey-300 line-through">162,000</span>
						<span className="absolute right-0 text-lg font-semibold text-tertiary">15&#37;</span>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default DetailsYouMay;
