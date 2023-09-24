import {useState} from 'react';
import '@/styles/detail.css';
import review01 from '../../assets/images/detail/review/01.jpg';
import review02 from '../../assets/images/detail/review/02.jpg';
import review03 from '../../assets/images/detail/review/03.jpg';
import review04 from '../../assets/images/detail/review/04.jpg';
import review05 from '../../assets/images/detail/review/05.jpg';
import review06 from '../../assets/images/detail/review/06.jpg';
import review07 from '../../assets/images/detail/review/07.jpg';
import review08 from '../../assets/images/detail/review/08.jpg';

function DetailsReview() {
	const [activeTab, setActiveTab] = useState('detail');
	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};

	const tabStyle = {
		color: 'black',
		cursor: 'pointer',
	};

	return (
		<section id="review" className="mb-20 pt-10">
			<div className="detailTabBtn mb-16 grid grid-cols-4 font-normal text-gray-700">
				<a href="#detail" className="detailTabBtn01 py-4 text-center text-mlg">
					DETAIL
				</a>
				<a href="#review" className="detailTabBtnOn py-4 text-center text-mlg">
					REVIEW (55)
				</a>
				<a href="#question" className="detailTabBtn03 removeLine py-4 text-center text-mlg">
					Q&A (12)
				</a>
				<a href="#delivery" className="detailTabBtn04 py-4 text-center text-mlg">
					RETURN & DELIVERY
				</a>
			</div>

			<ul className="mb-4 flex flex-row">
				<li className="mr-3 text-base text-grey-400">
					<button onClick={() => handleTabClick('DETAIL')}>
						<div style={activeTab === 'DETAIL' ? tabStyle : {}}>최신순</div>
					</button>
				</li>
				<li className="mr-3 text-sm text-grey-400">|</li>
				<li className="mr-3 text-base text-grey-400">
					<button onClick={() => handleTabClick('REVIEW')}>
						<div style={activeTab === 'REVIEW' ? tabStyle : {}}>평점 높은순</div>
					</button>
				</li>
				<li className="mr-3 text-sm text-grey-400">|</li>
				<li className="mr-3 text-base text-grey-400">
					<button onClick={() => handleTabClick('Q&A')}>
						<div style={activeTab === 'Q&A' ? tabStyle : {}}>평점 낮은순</div>
					</button>
				</li>
				<li className="mr-3 text-sm text-grey-400">|</li>
				<li className="mr-3 text-base text-grey-400">
					<button onClick={() => handleTabClick('RETURN & DELIVERY')}>
						<div style={activeTab === 'RETURN & DELIVERY' ? tabStyle : {}}>추천순</div>
					</button>
				</li>
			</ul>

			<ul className="mb-16 flex flex-row justify-between">
				<li>
					<img src={review01} alt="" style={{width: '148px', height: '148px'}} />
				</li>
				<li>
					<img src={review02} alt="" style={{width: '148px', height: '148px'}} />
				</li>
				<li>
					<img src={review03} alt="" style={{width: '148px', height: '148px'}} />
				</li>
				<li>
					<img src={review04} alt="" style={{width: '148px', height: '148px'}} />
				</li>
				<li>
					<img src={review05} alt="" style={{width: '148px', height: '148px'}} />
				</li>
				<li>
					<img src={review06} alt="" style={{width: '148px', height: '148px'}} />
				</li>
				<li>
					<img src={review07} alt="" style={{width: '148px', height: '148px'}} />
				</li>
				<li>
					<img src={review08} alt="" style={{width: '148px', height: '148px'}} />
				</li>
			</ul>
		</section>
	);
}

export default DetailsReview;
