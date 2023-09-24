import cate_label from '../../../public//header/cate_label.jpeg';
import cate_casual from '../../../public//header/cate_casual.jpeg';
import cate_globalshop from '../../../public//header/cate_globalshop.jpeg';
import cate_luxuryzone from '../../../public//header/cate_luxuryzone.jpeg';
import cate_manneiProductPic from '../../../public//header/cate_manneiProductPic.jpeg';
import {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

const catagoryList = [
	{
		id: crypto.randomUUID(),
		categoryTitle: '아우터',
		categoryItem: [
			{
				itemTitle: '자켓',
				id: crypto.randomUUID(),
				link: 'login',
			},
			{
				itemTitle: '점퍼',
				id: crypto.randomUUID(),
				link: 'login',
			},
			{
				itemTitle: '패딩',
				id: crypto.randomUUID(),
				link: 'login',
			},
			{
				itemTitle: '코트',
				id: crypto.randomUUID(),
				link: 'login',
			},
		],
	},
	{
		id: crypto.randomUUID(),
		categoryTitle: '팬츠',
		categoryItem: [
			{
				itemTitle: '슬랙스',
				id: crypto.randomUUID(),
				link: 'login',
			},
			{
				itemTitle: '쇼츠',
				id: crypto.randomUUID(),
				link: 'login',
			},
			{
				itemTitle: '치노',
				id: crypto.randomUUID(),
				link: 'login',
			},
			{
				itemTitle: '스웻',
				id: crypto.randomUUID(),
				link: 'login',
			},
			{
				itemTitle: '조거',
				id: crypto.randomUUID(),
				link: 'login',
			},
			{
				itemTitle: '카고',
				id: crypto.randomUUID(),
				link: 'login',
			},
			{
				itemTitle: '레깅스',
				id: crypto.randomUUID(),
				link: 'login',
			},
		],
	},
	{
		id: crypto.randomUUID(),
		categoryTitle: '티셔츠',
		categoryItem: [
			{
				itemTitle: '반팔',
				id: crypto.randomUUID(),
				link: 'login',
			},
			{
				itemTitle: '스웻',
				id: crypto.randomUUID(),
				link: 'login',
			},
			{
				itemTitle: '후드',
				id: crypto.randomUUID(),
				link: 'login',
			},
			{
				itemTitle: '긴팔',
				id: crypto.randomUUID(),
				link: 'login',
			},
			{
				itemTitle: '카라',
				id: crypto.randomUUID(),
				link: 'login',
			},
			{
				itemTitle: '슬리브리스',
				id: crypto.randomUUID(),
				link: 'login',
			},
			{
				itemTitle: '터틀넥',
				id: crypto.randomUUID(),
				link: 'login',
			},
		],
	},
	{
		id: crypto.randomUUID(),
		categoryTitle: '니트',
		categoryItem: [
			{
				itemTitle: '풀오버',
				id: crypto.randomUUID(),
				link: 'login',
			},
			{
				itemTitle: '가디건',
				id: crypto.randomUUID(),
				link: 'login',
			},
			{
				itemTitle: '베스트',
				id: crypto.randomUUID(),
				link: 'login',
			},
			{
				itemTitle: '베스트',
				id: crypto.randomUUID(),
				link: 'login',
			},
		],
	},
];

function CategoryMen() {
	return (
		<>
			{catagoryList.map((item) => (
				<ul key={item.id} className="block w-[177px] pl-[30px] pr-[20px]">
					<li className="depth2 mb-[12px] ">
						<a href="#" className="text-[14px] hover:underline hover:underline-offset-2">
							{item.categoryTitle}
						</a>
					</li>
					{item.categoryItem.map((item) => (
						<li key={item.id}>
							<NavLink to={item.link} className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b] hover:text-[#000]">
								{item.itemTitle}
							</NavLink>
						</li>
					))}
				</ul>
			))}
			<ul className="block w-[177px] pl-[30px] pr-[20px]"></ul>
			<ul className="block w-[177px] pl-[30px] pr-[20px]"></ul>
			<ul className="cate_banner mt-[50px] flex pl-[30px]">
				<li className="w-[129px]">
					<a href="#" className="block align-middle">
						<div className="img h-[94px]">
							<img className="h-[100%] w-[100%] object-cover align-middle" src={cate_label} alt="label" />
						</div>
						<p className="mt-[8px] overflow-hidden text-ellipsis whitespace-nowrap text-[12px] uppercase leading-[14px]">label</p>
					</a>
				</li>
				<li className="ml-[16px] w-[129px]">
					<a href="#" className="block align-middle">
						<div className="img h-[94px]">
							<img className="h-[100%] w-[100%] object-cover align-middle" src={cate_casual} alt="casual" />
						</div>
						<p className="mt-[8px] overflow-hidden text-ellipsis whitespace-nowrap text-[12px] uppercase leading-[14px]">Casual</p>
					</a>
				</li>
				<li className="ml-[16px] w-[129px]">
					<a href="#" className="block align-middle">
						<div className="img h-[94px]">
							<img className="h-[100%] w-[100%] object-cover align-middle" src={cate_globalshop} alt="globalshop" />
						</div>
						<p href="" className="mt-[8px] overflow-hidden text-ellipsis whitespace-nowrap text-[12px] uppercase leading-[14px]">
							Globalshop
						</p>
					</a>
				</li>
				<li className="ml-[16px] w-[129px]">
					<a href="#" className="block align-middle">
						<div className="img h-[94px]">
							<img className="h-[100%] w-[100%] object-cover align-middle" src={cate_luxuryzone} alt="luxuryzone" />
						</div>
						<p className="mt-[8px] overflow-hidden text-ellipsis whitespace-nowrap text-[12px] uppercase leading-[14px]">LUXURYZONE</p>
					</a>
				</li>
			</ul>
			<div className="product_list absolute right-[-216px] top-[14px]">
				<div className="product">
					<a href="#" className="flex align-middle">
						<div className="img relative h-[117px] w-[88px] after:absolute after:left-[0] after:top-[0] after:block after:h-[100%] after:w-[100%]  after:bg-[#00000008] after:content-['']">
							<img src={cate_manneiProductPic} className=" w-[100%]  " alt="ProductPic"></img>
						</div>
						<div className="text w-[128px] pl-[10px] pt-[4px]">
							<div className="brand min-h-[auto] w-[auto] overflow-hidden text-ellipsis whitespace-nowrap text-[12px] leading-[14px]">Belmain</div>
							<div className="desc mb-[10px] h-[32px] overflow-hidden break-all text-[12px] leading-[16px] text-[#7b7b7b]">23SS 발망 스웨터 AF1JO040 BB02GAB WHITE</div>
							<div className="price">
								<span className="discount_price mr-[6px] text-[14px]">607,000</span>
								<span className="discount_rate mr-[6px] text-[12px] text-[#fa5500]">42%</span>
							</div>
						</div>
					</a>
				</div>
				<div className="product mt-[30px]">
					<a href="#" className="flex align-middle">
						<div className="img relative h-[117px] w-[88px] after:absolute after:left-[0] after:top-[0] after:block after:h-[100%] after:w-[100%]  after:bg-[#00000008] after:content-['']">
							<img src={cate_manneiProductPic} className=" w-[100%]  " alt="ProductPic"></img>
						</div>
						<div className="text w-[128px] pl-[10px] pt-[4px]">
							<div className="brand min-h-[auto] w-[auto] overflow-hidden text-ellipsis whitespace-nowrap text-[12px] leading-[14px]">Belmain</div>
							<div className="desc mb-[10px] h-[32px] overflow-hidden break-all text-[12px] leading-[16px] text-[#7b7b7b]">23SS 발망 스웨터 AF1JO040 BB02GAB WHITE</div>
							<div className="price">
								<span className="discount_price mr-[6px] text-[14px]">607,000</span>
								<span className="discount_rate mr-[6px] text-[12px] text-[#fa5500]">42%</span>
							</div>
						</div>
					</a>
				</div>
			</div>
		</>
	);
}

export default CategoryMen;
