import story1 from '@/assets/images/mainPage/main_story_1.webp';
import story2 from '@/assets/images/mainPage/main_story_2.webp';
import story3 from '@/assets/images/mainPage/main_story_3.webp';
import story4 from '@/assets/images/mainPage/main_story_4.webp';
import {motion} from 'framer-motion';

const storyList = [
	{
		title: '월간 라이프 9월호',
		img: story1,
		description: `전용 12%쿠폰, 가을의 초입에서 제안하는 새로운 라이프스타일.\n3만원 쿠폰 증정 퀴즈 이벤트와 배송비 더블쿠폰 등 특별혜택 만나보기`,
	},
	{
		title: 'NIKE & ADIDAS POP-UP',
		img: story2,
		description: `GLOBAL SPORTS BRANDS \n 24H POP-UP SALE`,
	},
	{
		title: 'THANKS GIVING PRESENT',
		img: story3,
		description: `부담은 적게, 감동은 크게! 센스있게 알찬 구성으로 준비한 기획세트 \n 최대 83% 할인에 15% 쿠폰 혜택을 놓치지 마세요!`,
	},
	{
		title: 'EXCLUSIVE KNITWEAR',
		img: story4,
		description: 'TREND WE PICK: A VOYAGE\n익스클루시브 니트웨어와 함께.',
	},
];

function StyleStory() {
	return (
		<>
			<section className="mb-32">
				<h2 className="mb-8 text-center text-[54px] font-thin">STYLE STORY</h2>
				<ul className="flex justify-between gap-10 mx-2 px-2">
					{storyList.map((item) => {
						return (
							<li key={item.title}>
								<a href="#">
									<figure>
										<motion.img src={item.img} alt={item.title} whileHover={{scale: 1.05}} whileTap={{scale: 1.02}} drag="x" dragConstraints={{left: -100, right: 100}} className='w-full h-full'/>
										<dl>
											<dt aria-label="제목"></dt>
											<dd className="my-6 text-center text-2xl font-semibold">{item.title}</dd>
											<dt aria-label="설명"></dt>
											<dd className="whitespace-pre-line text-center text-base text-gray-500">{item.description}</dd>
										</dl>
									</figure>
								</a>
							</li>
						);
					})}
				</ul>
			</section>
		</>
	);
}

export default StyleStory;
