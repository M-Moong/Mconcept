import pb from '@/api/pocketbase';
import { useEffect, useState } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductInfo from '../ProductInfo';

const style = [
	'text-left',
	'ml-1',
	'ml-2',
]

function MakeItYours() {
	const [data, setData] = useState([]);

	useEffect(() => {
		pb.autoCancellation(false);
		async function getProducts() {
			try {
				const readRecordList = await pb.collection('products').getFullList();
				setData(readRecordList);
			} catch (error) {
				console.log(error);
				throw new Error('error');
			}
		}
		getProducts();
	}, []);

	return (
		<>
			<section className="relative mx-auto mb-10">
				<h2 className="mb-8 text-center text-[54px] font-thin">MAKE IT YOURS</h2>
				<div className="flex px-20">
					<Swiper
						slidesPerView={6}
						spaceBetween={20}
						loop={true}
						navigation={{
							nextEl: '#nextNavi',
							prevEl: '#preNavi',
						}}
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
						modules={[Navigation, Autoplay]}
						className="mySwiper"
					>
						{data ? (
							data
								?.filter((item) => item.main == true)
								.map((item) => {
									return (
										<SwiperSlide key={item.id}>
											<ProductInfo item={item} style={style}/>
										</SwiperSlide>
									);
								})
						) : (
							<div>ERROR</div>
						)}
					</Swiper>
					<div className="swiper-button-prev" id="preNavi"></div>
					<div className="swiper-button-next" id="nextNavi"></div>
				</div>
			</section>
		</>
	);
}

export default MakeItYours;




