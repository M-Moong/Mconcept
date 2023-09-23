import {json, useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import '../styles/detail.css';
// import {getProductsImage} from '../utils/getProductsImage';
// import getProductsImageArray from '../utils/getProductsImageArray';
import pb from '@/api/pocketbase';
import DetailsNav from '../components/detail/DetailsNav';
import DetailsProducts from '../components/detail/DetailsProducts';
import DetailsWvProject from '../components/detail/DetailsWvProject';
import DetailsDetail from '../components/detail/DetailsDetail';
import DetailsYouMay from '../components/detail/DetailsYouMay';
import DetailsBeauty from '../components/detail/DetailsBeauty';
import DetailsReview from '../components/detail/DetailsReview';
import DetailsQuestion from '../components/detail/DetailsQuestion';
import DetailsDelivery from '../components/detail/DetailsDelivery';

// 자바스크립트 적용 확인해보기
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
// 	anchor.addEventListener('click', function (e) {
// 		e.preventDefault();

// 		const targetId = this.getAttribute('href').substring(1);
// 		const targetElement = document.getElementById(targetId);

// 		window.scrollTo({
// 			top: targetElement.offsetTop,
// 			behavior: 'smooth', // 부드러운 스크롤 애니메이션을 적용합니다.
// 		});
// 	});
// });

// 이미지 불러오기

function Details() {
	const {id} = useParams();
	const [activeTab, setActiveTab] = useState('detail');
	const [data, setData] = useState();

	useEffect(() => {
		// 현재 로컬 스토리지에 저장된 데이터 가져오기
		let currentHistory = JSON.parse(localStorage.getItem('recentlyViewed')) || [];

		// 새로운 아이템이 이미 리스트에 있는지 확인하고 있다면 삭제
		if (currentHistory.find((item) => item === id)) {
			currentHistory = currentHistory.filter((item) => item !== id);
		}

		// 현재 보고 있는 아이템을 최근 본 목록의 가장 앞으로 추가
		currentHistory.unshift(id);

		localStorage.setItem('recentlyViewed', JSON.stringify(currentHistory));
	}, [id]); // id가 변경될 때마다 이 useEffect 실행

	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};

	const tabStyle = {
		color: 'black',
		cursor: 'pointer',
	};
	useEffect(() => {
		async function getProduct() {
			try {
				const readProduct = await pb.collection('products').getOne(id);

				setData(readProduct);
				console.log(data);
			} catch (error) {
				if (!(error instanceof ClientResponseError)) {
					console.error(error);
				}
			}
		}
		getProduct();
	}, []);

	// function ZoomLens() {
	// const [imageSrc, setImageSrc] = useState('image.jpg');
	// const [zoomedArea, setZoomedArea] = useState(null);

	// function handleImageClick(event) {
	//   const { offsetX, offsetY } = event.nativeEvent;
	//   // 여기서 offsetX와 offsetY는 클릭한 위치의 좌표입니다.

	//   // 확대할 범위 설정
	//   const zoomFactor = 2;
	//   const originalWidth = event.target.clientWidth;
	//   const originalHeight = event.target.clientHeight;

	//   // 확대할 좌상단 점 계산
	//   const topLeftX = Math.max(0, offsetX - originalWidth / (2 * zoomFactor));
	//   const topLeftY = Math.max(0, offsetY - originalHeight / (2 * zoomFactor));

	//   // 확대할 우하단 점 계산
	//   const bottomRightX = Math.min(originalWidth, offsetX + originalWidth / (2 * zoomFactor));
	//   const bottomRightY = Math.min(originalHeight, offsetY + originalHeight / (2 * zoomFactor));

	//   // 선택한 영역 크롭
	//   const canvas = document.createElement('canvas');
	//   canvas.width = bottomRightX - topLeftX;
	// 	canvas.height= bottomRightY - topLeftY;
	// 	const context=canvas.getContext("2d");
	// 	context.drawImage(event.target,topLeftX,topLeftY,bottomRightX-topLeftX,bottomRightY-topLeftY,
	//                     0,0,bottomRightX-topLeftX,bottomRightY-topLeftY);

	// 	// 크롭된 이미지 데이터 URL 생성
	// 	const croppedImageURL=canvas.toDataURL();

	// 	// 크롭된 이미지 출력
	//   setZoomedArea(croppedImageURL);
	// }
	if (data) {
		return (
			<div className="relative mx-auto mb-[200px] w-[1240px]">
				<DetailsNav />
				<DetailsProducts data={data} />
				<DetailsWvProject />
				<DetailsDetail data={data} />
				<DetailsYouMay />
				<DetailsBeauty />
				<DetailsReview />
				<DetailsQuestion />
				<DetailsDelivery />
			</div>
		);
	}
}

export default Details;

// 가져온거는 완료
// data.name 처럼  data.ㅇㅇㅇ로 가져오기 > 스타일링한 것에 항목들에 class를 지정하기
