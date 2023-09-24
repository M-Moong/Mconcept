import main1 from '@/assets/images/mainPage/main_banner_1.webp';
import main2 from '@/assets/images/mainPage/main_banner_2.webp';
import main3 from '@/assets/images/mainPage/main_banner_3.webp';
import main4 from '@/assets/images/mainPage/main_banner_4.webp';
import main5 from '@/assets/images/mainPage/main_banner_5.webp';
import main6 from '@/assets/images/mainPage/main_banner_6.webp';
import main7 from '@/assets/images/mainPage/main_banner_7.webp';
import main8 from '@/assets/images/mainPage/main_banner_8.webp';
import main9 from '@/assets/images/mainPage/main_banner_9.webp';
import main10 from '@/assets/images/mainPage/main_banner_10.webp';
import main11 from '@/assets/images/mainPage/main_banner_11.webp';
import main12 from '@/assets/images/mainPage/main_banner_12.webp';
import main13 from '@/assets/images/mainPage/main_banner_13.webp';

import '@/styles/swiper.css';
import {useRef} from 'react';
import {FaPause, FaPlay} from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

const mainBanner = [main1, main2, main3, main4, main5, main6, main7, main8, main9, main10, main11, main12, main13];

function MainArticle() {
	const swiperRef = useRef(null);
	const progressCircle = useRef(null);
	const progressContent = useRef(null);

	const handlePause = () => {
		if (swiperRef.current && swiperRef.current.swiper.autoplay.running) {
			swiperRef.current.swiper.autoplay.stop();
		}
	};

	const handlePlay = () => {
		if (swiperRef.current && !swiperRef.current.swiper.autoplay.running) {
			swiperRef.current.swiper.autoplay.start();
		}
	};

	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty('--progress', 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};

	return (
		<>
			<section className="mb-32">
				<article className="relative h-full">
					<Swiper
						ref={swiperRef}
						slidesPerView={1}
						spaceBetween={30}
						loop={true}
						pagination={{
							clickable: true,
						}}
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
						centeredSlides={true}
						navigation={{
							nextEl: '#nnavi',
							prevEl: '#pnavi',
						}}
						modules={[Autoplay, Pagination, Navigation]}
						onAutoplayTimeLeft={onAutoplayTimeLeft}
						className="mySwiper"
					>
						{mainBanner.map((item) => {
							return (
								<SwiperSlide key={item}>
									<a href="#">
										<img src={item} alt="" className='w-full h-full'/>
									</a>
								</SwiperSlide>
							);
						})}
						{/* 이전, 다음 버튼 */}
						<div className="swiper-button-prev" id="pnavi"></div>
						<div className="swiper-button-next" id="nnavi"></div>
						{/* 일시정지 버튼 */}
						<button onClick={handlePause} className="swiperPause" aria-label="일시정지">
							<FaPause className="faPause" />
						</button>
						{/* 재생 버튼  */}
						<button onClick={handlePlay} className="swiperPlay" aria-label="재생">
							<FaPlay className="faPlay" />
						</button>
						{/* 타이머 */}
						<div className="autoplay-progress" slot="container-end">
							<svg viewBox="0 0 48 48" ref={progressCircle}>
								<circle cx="24" cy="24" r="20"></circle>
							</svg>
							<span ref={progressContent}></span>
						</div>
					</Swiper>
				</article>
			</section>
		</>
	);
}

export default MainArticle;
