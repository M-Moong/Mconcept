import '../../styles/detail.css';

import more01 from '../../assets/images/detail/more/img_01.jpeg';
import more02 from '../../assets/images/detail/more/img_02.png';
import more03 from '../../assets/images/detail/more/img_03.png';
import more04 from '../../assets/images/detail/more/img_04.jpeg';
import more05 from '../../assets/images/detail/more/img_05.png';
import more06 from '../../assets/images/detail/more/img_06.png';
import more07 from '../../assets/images/detail/more/img_07.png';
import more08 from '../../assets/images/detail/more/img_08.png';
import icoMoreBrand from '../../assets/images/detail/ico_more_brand.png';

function DetailsWvProject() {
	return (
		<section className="mb-16">
			<div className="mb-4 flex flex-row">
				<h6 className="font-mlg mr-2 font-semibold">More by WV PROJECT</h6>
				<img className="h-[14px] w-[14px] align-middle" src={icoMoreBrand} alt="" />
			</div>
			<ul className="flex w-[1240px] flex-row justify-between">
				<li className="detail_dimmed_box imgHover relative h-[180px] w-[135px]">
					<img src={more01} alt="" />
					<span className="detail_dimmed absolute bottom-0 inline-block w-[135px] bg-black bg-opacity-50 py-[3px] text-center font-normal text-white">65,900</span>
				</li>
				<li className="detail_dimmed_box imgHover relative h-[180px] w-[135px]">
					<img src={more02} alt="" />
					<span className="detail_dimmed absolute bottom-0 inline-block w-[135px] bg-black bg-opacity-50 py-[3px] text-center font-normal text-white">43,900</span>
				</li>
				<li className="detail_dimmed_box imgHover relative h-[180px] w-[135px]">
					<img src={more03} alt="" />
					<span className="detail_dimmed absolute bottom-0 inline-block w-[135px] bg-black bg-opacity-50 py-[3px] text-center font-normal text-white">41,900</span>
				</li>
				<li className="detail_dimmed_box imgHover relative h-[180px] w-[135px]">
					<img src={more04} alt="" />
					<span className="detail_dimmed absolute bottom-0 inline-block w-[135px] bg-black bg-opacity-50 py-[3px] text-center font-normal text-white">53,600</span>
				</li>
				<li className="detail_dimmed_box imgHover relative h-[180px] w-[135px]">
					<img src={more05} alt="" />
					<span className="detail_dimmed absolute bottom-0 inline-block w-[135px] bg-black bg-opacity-50 py-[3px] text-center font-normal text-white">49,500</span>
				</li>
				<li className="detail_dimmed_box imgHover relative h-[180px] w-[135px]">
					<img src={more06} alt="" />
					<span className="detail_dimmed absolute bottom-0 inline-block w-[135px] bg-black bg-opacity-50 py-[3px] text-center font-normal text-white">41,900</span>
				</li>
				<li className="detail_dimmed_box imgHover relative h-[180px] w-[135px]">
					<img src={more07} alt="" />
					<span className="detail_dimmed absolute bottom-0 inline-block w-[135px] bg-black bg-opacity-50 py-[3px] text-center font-normal text-white">46,400</span>
				</li>
				<li className="detail_dimmed_box imgHover relative h-[180px] w-[135px]">
					<img src={more08} alt="" />
					<span className="detail_dimmed absolute bottom-0 inline-block w-[135px] bg-black bg-opacity-50 py-[3px] text-center font-normal text-white">62,900</span>
				</li>
			</ul>
		</section>
	);
}

export default DetailsWvProject;
