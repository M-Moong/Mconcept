import popup1 from '@/assets/images/mainPage/main_popup_1.png';
import popup2 from '@/assets/images/mainPage/main_popup_2.png';
import EventBanner from '@/components/mainPage/EventBanner';
import MainArticle from '@/components/mainPage/MainArticle';
import MakeItYours from '@/components/mainPage/MakeItYours';
import PopUp from '@/components/mainPage/PopUp';
import StyleStory from '@/components/mainPage/StyleStory';
import {Helmet} from 'react-helmet-async';

const popup = [
	{
		img: popup1,
		alt: '글로벌 브랜드 60% 세일',
		style: 'left-[100px]',
		today: 'today1',
	},
	{
		img: popup2,
		alt: '아우터 3일만 최대 70% 세일 페이지',
		style: 'left-[500px]',
		today: 'today2',
	},
];

function Mainpage() {
	return (
		<>
			<Helmet>
				<title>Home - M Concept</title>
			</Helmet>
			<div className="mx-auto max-w-[1920px]">
				<MainArticle />
				<StyleStory />
				<EventBanner />
				<MakeItYours />
				<PopUp popup={popup[0]} />
				<PopUp popup={popup[1]} />
			</div>
		</>
	);
}

export default Mainpage;
