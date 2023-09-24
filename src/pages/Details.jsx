import pb from '@/api/pocketbase';
import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import DetailsBeauty from '../components/detail/DetailsBeauty';
import DetailsDelivery from '../components/detail/DetailsDelivery';
import DetailsDetail from '../components/detail/DetailsDetail';
import DetailsNav from '../components/detail/DetailsNav';
import DetailsProducts from '../components/detail/DetailsProducts';
import DetailsQuestion from '../components/detail/DetailsQuestion';
import DetailsReview from '../components/detail/DetailsReview';
import DetailsWvProject from '../components/detail/DetailsWvProject';
import DetailsYouMay from '../components/detail/DetailsYouMay';
import '../styles/detail.css';

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
			} catch (error) {
				if (!(error instanceof ClientResponseError)) {
					console.error(error);
				}
			}
		}
		getProduct();
	}, []);

	if (data) {
		return (
			<div className="relative mx-auto mb-[200px] w-[1240px]">
				<Helmet>
					<title>상세페이지 | M CONCEPT</title>
				</Helmet>
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
