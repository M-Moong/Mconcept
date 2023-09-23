import React, {useEffect, useRef, useState} from 'react';
import '../../styles/category.css';

// 카테고리 및 아이템 데이터
const categories = [
	{	
		id: '1',
		title: '아우터',
		items: ['VIEW ALL OUTER', '자켓', '점퍼', '패딩', '코트'],
	},
	{
		id: '2',
		title: '팬츠',
		items: ['VIEW ALL PANTS', '슬랙스', '쇼츠', '치노', '조거'],
	},
	{
		id: '3',
		title: '티셔츠',
		items: ['VIEW ALL T-SHIRTS', '반팔', '스웻', '후드', '긴팔'],
	},
	{
		id: '4',
		title: '니트',
		items: ['VIEW ALL NEAT', '풀오버', '가디건', '베스트', '터틀넥'],
	},
];

function ProductCategoryItem() {
    const [activeItem, setActiveItem] = useState(null);

    return (
        <>
            {categories.map((category, index) => (
                <div key={index} className="px-2 text-sm leading-8 my-4">
                    <a className="text-lg font-bold" href="#">
                        <button
                            className="float-right mr-2 mt-3 block h-[9px] w-[9px]"
                            style={{
                                backgroundImage:
                                    `url("https://static.wconcept.co.kr/web/images/common/spr-common.png")`,
                                backgroundPositionX: "0",
                                backgroundPositionY: "-60px",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></button>
                        <dl 
                            key={`${index}-title`} 
                            onClick={() => setActiveItem(category.title)} 
                            className={activeItem === category.title ? "item-active" : ""}
                        >
                            <dt className="sr-only" aria-label="제목"></dt>
                            <dd>{category.title}</dd>
                        </dl>
                    </a>

                    {category.items.map((item, id) => (
                        <dl 
                            key={`${index}-${id}`} 
                            onClick={() => setActiveItem(item)} 
                            className={activeItem === item ? "item-active" : ""}
                        >
	                        <dt className="sr-only" aria-label="부제목"></dt>
	                        <dd>{item}</dd>
	                    </dl>
	                ))}
                </div>
            ))}
        </>
    );
}

export default ProductCategoryItem;
