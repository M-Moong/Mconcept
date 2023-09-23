import event1 from '@/assets/images/mainPage/main_event_banner_1.webp';
import event2 from '@/assets/images/mainPage/main_event_banner_2.webp';
import event3 from '@/assets/images/mainPage/main_event_banner_3.webp';
import event4 from '@/assets/images/mainPage/main_event_banner_4.webp';

const eventList = [event1, event2, event3, event4];

function EventBanner() {
	return (
		<>
			<section className="mb-32 flex">
				<h2 className="sr-only">EVENT BANNER</h2>

				<a href="#" className="relative h-auto w-auto">
					<img src={eventList[1]} alt="쇼핑 리워드" className="h-full w-full" />
					<img src={eventList[3]} alt="" className="absolute right-0 top-0 h-full" />
				</a>

				<a href="#" className="relative h-auto w-auto">
					<img src={eventList[0]} alt="이달의 혜택" className="h-full w-full" />
					<img src={eventList[2]} alt="" className="absolute left-0 top-0 h-full" />
				</a>
			</section>
		</>
	);
}

export default EventBanner;
