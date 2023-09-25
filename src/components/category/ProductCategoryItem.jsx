import React, {useEffect, useRef, useState} from 'react';
import '../../styles/category.css';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

// 카테고리 및 아이템 데이터
const categories = [
	{
		id: '1',
		title: '아우터',
		entit: 'outer',
		items: ['자켓', '점퍼', '패딩', '코트'],
		eitems: ['jacket', 'jumper', 'padding', 'coat'],
	},
	{
		id: '2',
		title: '팬츠',
		entit: 'pants',
		items: ['슬랙스', '쇼츠', '치노', '조거'],
		eitems: ['slacks', 'shorts', 'chinos', 'jogger'],
	},
	{
		id: '3',
		title: '티셔츠',
		entit: 'tshirts',
		items: ['슬리브', '스웻', '후드', '롱슬리브'],
		eitems: ['sleeves', 'sweats', 'Hood', 'longsleeves'],
	},
	{
		id: '4',
		title: '니트',
		entit: 'neat',
		items: ['풀오버', '가디건', '베스트', '터틀넥'],
		eitems: ['pullover', 'cardigan', 'best', 'turtleneck'],
	},
];

function ProductCategoryItem() {
	const [activeItem, setActiveItem] = useState(null);
	const [isItemsVisible, setIsItemsVisible] = useState({0: true});
	const [buttonStyles, setButtonStyles] = useState({0: '-30px'});

	const handleButtonClick = (index) => {
		setIsItemsVisible((prevState) => ({
			...prevState,
			[index]: !prevState[index],
		}));
		setButtonStyles((prevState) => ({
			...prevState,
			[index]: prevState[index] ? '0' : '-30px',
		}));
	};

	return (
		<>
			{categories.map((category, index) => (
				<div key={index} className="my-4 px-2 text-sm leading-8">
					<a className="text-lg font-bold" href="#" aria-label={index}>
						<button
							id="button"
							type="button"
							aria-label="플러스"
							className="float-right mr-2 mt-3 block h-[9px] w-[9px] bg-sprite01"
							style={{
								backgroundPositionX: buttonStyles[index] || '0',
								backgroundPositionY: '-60px',
								backgroundRepeat: 'no-repeat',
							}}
							onClick={() => handleButtonClick(index)}
						></button>
					</a>
					{/* 카테고리 제목에 링크를 추가합니다 */}
					<Link className="text-lg font-bold" to={`/categoryBrand/${category.entit}`} onClick={() => setActiveItem(category.title)}>
						<dl key={`${index}-title`}>
							<dt className="sr-only" aria-label="제목"></dt>
							<dd className={`item ${activeItem === category.title ? 'item-active' : ''}`}>{category.title}</dd>
						</dl>
					</Link>
					{/* 카테고리 부제목에 링크를 추가합니다 */}
					{category.items.map((item, id) => (
						<Link to={`/categoryBrand/${category.eitems && category.eitems[id]}`} key={`${index}-${id}`} onClick={() => setActiveItem(item)}>
							<dl>
								<dt className="sr-only" aria-label="부제목"></dt>
								<motion.dd className={`item ml-2 ${activeItem === item ? 'item-active' : ''} ${isItemsVisible[index] ? '' : 'hidden'}`} whileHover={{opacity: 0.9}}>
									{item}
								</motion.dd>
							</dl>
						</Link>
					))}
				</div>
			))}
		</>
	);
}

export default ProductCategoryItem;
