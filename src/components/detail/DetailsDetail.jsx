import {useParams} from 'react-router-dom';
// import {getProductsImage} from '@/utils/getProductsImage';
import React, {useEffect, useState} from 'react';
import pb from '@/api/pocketbase';
import getProductsImageArray from '../../utils/getProductsImageArray';
import '@/styles/detail.css';

function DetailsDetail({data}) {
	const {id} = useParams();

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
		// getProduct();
	}, []);

	if (data) {
		return (
			<section id="detail" className="pt-10">
				<div className="detailTabBtn mb-16 grid grid-cols-4 font-normal text-gray-700">
					<a href="#detail" className="detailTabBtnOn py-4 text-center text-mlg">
						DETAIL
					</a>
					<a href="#review" className="detailTabBtn02 removeLine py-4 text-center text-mlg">
						REVIEW (55)
					</a>
					<a href="#question" className="detailTabBtn03 py-4 text-center text-mlg">
						Q&A (12)
					</a>
					<a href="#delivery" className="detailTabBtn04 py-4 text-center text-mlg">
						RETURN & DELIVERY
					</a>
				</div>

				{data &&
					data.details.map((item, index) => (
						<div key={item} className="mx-auto flex w-[780px] flex-col justify-center text-center">
							<img src={getProductsImageArray(data, index, 'details')} alt="상세이미지" className="m-auto h-auto pt-20" />
						</div>
					))}
			</section>
		);
	}
}

export default DetailsDetail;
