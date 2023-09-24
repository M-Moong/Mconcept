import pb from '@/api/pocketbase';
import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

import star from '../../assets/images/detail/star.png';
import tooltip from '../../assets/images/detail/tooltip.png';
import {getProductsImage} from '@/utils/getProductsImage';
import gift from '../../assets/images/detail/ico_prod_gift.svg';
import heartoff from '../../assets/images/detail/ico_prod_heart_off.svg';
import hearton from '../../assets/images/detail/ico_prod_heart_on.svg';
import plusIcon from '../../assets/images/detail/bg_plus.gif';

function DetailsProducts({data}) {
	const {id} = useParams();

	const [size, setSize] = useState('');
	const [color, setColor] = useState('');

	const [isLiked, setIsLiked] = useState(false);
	const [likesCount, setLikesCount] = useState(107);

	const handleClick = () => {
		if (isLiked) {
			setLikesCount(likesCount - 1);
		} else {
			setLikesCount(likesCount + 1);
		}
		setIsLiked(!isLiked);
	};

	useEffect(() => {
		async function getProductsImage() {
			try {
				const readProduct = await pb.collection('products').getOne(id);

				setData(readProduct);
			} catch (error) {
				if (!(error instanceof ClientResponseError)) {
					console.error(error);
				}
			}
		}
	}, []);

	if (data) {
		return (
			<section className="flex-rows mb-10 flex">
				<div className="mr-[55px]">
					<img src={getProductsImage(data, 'photo')} alt={data.name} key={data.id} className="mb-5 w-[525px]" />
				</div>

				<div className="w-[660px]">
					<div className="border-b-2 border-black">
						<h4 className="mb-4 text-[24px] font-medium">{data.brand}</h4>
						<p className="mb-5 text-base font-normal">{data.name}</p>
						<ul className="mb-5 flex flex-row">
							<li className="w-[125px]">
								<img className="mr-1 inline" src={star} alt="" />
								<span className="align-middle text-lg font-semibold">{data.star}</span>
							</li>
							<a href="#review" className="mt-1 text-sm underline">
								55개 리뷰 &#62;
							</a>
						</ul>

						<dl className="mb-4">
							<dt className="float-left w-[125px] py-2 text-[13px]">정상가</dt>
							<dd className="flex flex-row py-2 text-grey-200">
								<span className=" text-[18px] line-through">{data.price}</span>
								<span className="ml-1 mt-1 text-base">원</span>
							</dd>
							<dt className="float-left w-[125px] py-2">
								<span className="mr-2 text-[13px]">할인적용가</span>
								<button className="align-middle">
									<img src={tooltip} alt="" />
								</button>
							</dt>
							<dd className="flex flex-row py-2">
								<span className="text-mlg font-semibold">34,900</span>
								<span className="mt-[2px]">원</span>
								<span className="ml-2 text-mlg font-semibold text-tertiary">31&#37;</span>
							</dd>
						</dl>
					</div>

					<div className="relative border-b-[1px] border-grey-100 py-5">
						<dl className="mb-4">
							<dt className="float-left w-[125px] py-2 text-[13px]">신규회원 혜택가</dt>
							<dd className="flex flex-row py-2 text-[16px]">
								67,410 <p className="ml-[2px] mt-1 text-sm">원</p>
							</dd>
							<dt className="float-left w-[125px] py-2 text-[13px]">추가혜택가</dt>
							<dd className="flex w-[425px] flex-col py-2 text-sm text-grey-800">
								<span>KakaoPay 할인 5,000원 할인</span>
								<span>카카오페이로 신한카드 10만원 이상 결제 시 5천원 즉시할인</span>
							</dd>
						</dl>
						<button className="absolute bottom-16 right-0 text-sm text-[#333] underline">추가혜택 더보기 &#62;</button>
					</div>

					<div className="relative py-5">
						<dl className="mb-4">
							<dt className="float-left w-[125px] py-2 text-[13px]">무이자 할부</dt>
							<dd className="flex flex-row py-2 ">
								<span className="mt-[1px] text-sm text-grey-800">최대 6개월&#40;12,483원 X 6개월&#41;</span>
								<button className="ml-2 flex flex-row border border-[#959595]">
									<p className="px-2 py-[1px] text-sm">카드안내</p>
									<img src={plusIcon} alt="" />
								</button>
							</dd>
							<dt className="float-left w-[125px] py-2 text-[13px]">포인트 적립</dt>
							<dd className="flex flex-row py-2 ">
								<span className="mt-[1px] text-sm text-grey-800">749 p 적립</span>
								<button className="ml-2 flex flex-row border border-[#959595]">
									<p className="px-2 py-[1px] text-sm">포인트안내</p>
									<img src={plusIcon} alt="" />
								</button>
							</dd>
							<button className="absolute right-0 text-sm text-[#333] underline">사이즈 가이드 &#62;</button>
						</dl>

						<div className="py-4">
							<label>
								<span className="inline-block w-[125px] text-[13px]">색상&#47;사이즈</span>
								<select value={size} onChange={(e) => setSize(e.target.value)} className="w-[535px] bg-[#f2f2f2] px-5 py-3 text-base">
									<option value="">선택해 주세요.</option>
									<option value="s">Small</option>
									<option value="m">Medium</option>
									<option value="l">Large</option>
								</select>
							</label>
						</div>
					</div>

					<ul className="flex flex-row justify-between py-[30px]">
						<li>
							<button className="h-[70px] w-[250px] border border-black text-[20px]">바로 구매</button>
						</li>
						<li>
							<button className="h-[70px] w-[250px] bg-black text-[20px] text-white">쇼핑백 담기</button>
						</li>
						<li>
							<button className="flex h-[70px] w-[70px] flex-col items-center bg-tertiary">
								<img className="mt-2" src={gift} alt="" />
								<span className="mt-[3px] text-[13px] text-white">선물하기</span>
							</button>
						</li>
						<li>
							<button onClick={handleClick} className="flex h-[70px] w-[70px] flex-col items-center border border-grey-200">
								<img className="mt-2" src={isLiked ? hearton : heartoff} alt="" />
								<span className="mt-[3px] text-[13px] text-[#7d7d7d]">{likesCount}</span>
							</button>
						</li>
					</ul>
				</div>
			</section>
		);
	}
}

export default DetailsProducts;
