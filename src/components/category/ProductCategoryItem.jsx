import React, {useState} from 'react';
import '../../styles/category.css';

// 카테고리 및 아이템 데이터
const categories = [
	{
		title: '아우터',
		items: ['VIEW ALL OUTER', '자켓', '점퍼', '패딩', '코트'],
	},
	{
		title: '팬츠',
		items: ['VIEW ALL PANTS', '슬랙스', '쇼츠', '치노', '스웻'],
	},
	{
		title: '티셔츠',
		items: ['VIEW ALL T-SHIRTS', '반팔', '스웻', '후드', '긴팔'],
	},
	{
		title: '니트',
		items: ['VIEW ALL NEAT', '반팔', '스웻', '후드', '긴팔'],
	},
];

function ProductCategoryItem() {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<>
			{categories.map((category, categoryIdx) => (
				<dl key={categoryIdx} className="px-2 text-sm leading-8">
					<dt className="pt-5 text-lg font-bold text-tertiary">
						<a href="#">
							{category.title}
							<button
								className="float-right mr-2 mt-3 block h-[9px] w-[9px]"
								style={{
									backgroundImage: `url("https://static.wconcept.co.kr/web/images/common/spr-common.png")`,
									backgroundPositionX: '0',
									backgroundPositionY: '-60px',
									backgroundRepeat: 'no-repeat',
								}}
							></button>
						</a>
					</dt>
					{category.items.map((item, itemIdx) => renderItem(item, itemIdx))}
				</dl>
			))}
		</>
	);

	function renderItem(item, index) {
		const isActive = activeIndex === index;
		const className = isActive ? 'item-active' : '';

		return (
			<dd key={index} onClick={() => handleClick(index)} className={className}>
				<a href="#">{item}</a>
			</dd>
		);
	}
}

export default ProductCategoryItem;
