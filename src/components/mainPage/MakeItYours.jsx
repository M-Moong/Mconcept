import pb from '@/api/pocketbase';
import ProductInfo from '@/components/common/ProductInfo';
import Spinner from '@/components/common/Spinner';
import {useQuery} from '@tanstack/react-query';
import {Autoplay, Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

const style = ['text-left', 'ml-1', 'ml-2'];

const getProducts = async () => {
	return await pb.collection('products').getFullList();
};

function MakeItYours() {
	const {isLoading, data, isError, error} = useQuery({
		queryKey: ['products'],
		queryFn: getProducts,
		retry: 2,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	});

	if (isLoading) {
		return (
			<div className="grid h-full place-content-center">
				<Spinner size={160} />
			</div>
		);
	}

	if (isError) {
		return <div role="alert">{error.toString()}</div>;
	}

	return (
		<>
			<section className="relative mx-auto mb-32">
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
											<ProductInfo item={item} style={style} />
										</SwiperSlide>
									);
								})
						) : (
							<Spinner />
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
