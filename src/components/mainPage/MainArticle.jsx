import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import main1 from '@/assets/images/mainPage/main_banner_1.png';
import main2 from '@/assets/images/mainPage/main_banner_2.png';
import main3 from '@/assets/images/mainPage/main_banner_3.png';
import main4 from '@/assets/images/mainPage/main_banner_4.png';
import main5 from '@/assets/images/mainPage/main_banner_5.png';
import main6 from '@/assets/images/mainPage/main_banner_6.png';
import '@/styles/swiper.css';
import {useRef} from 'react';
import {FaPlay, FaPause} from 'react-icons/fa';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, Autoplay} from 'swiper/modules';

const mainBanner = [main1, main2, main3, main4, main5, main6];

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
			<section className="mb-[5rem]">
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
										<img src={item} alt="" />
									</a>
								</SwiperSlide>
							);
						})}
						{/* 이전, 다음 버튼 */}
						<div className="swiper-button-prev" id="pnavi"></div>
						<div className="swiper-button-next" id="nnavi"></div>
						{/* 일시정지, 재생 버튼 */}
						<button onClick={handlePause} className="swiperPause">
							<FaPause className="faPause" />
						</button>
						<button onClick={handlePlay} className="swiperPlay">
							<FaPlay className="faPlay" />
						</button>
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
