import {useEffect, useState} from 'react';

function PopUp({popup}) {
	const [showPopup, setShowPopup] = useState(true);
	const [isChecked, setIsChecked] = useState(false);

	let popupPosition = `absolute z-30 top-[600px] shadow-2xl rounded-xl ${popup.style}`;

	useEffect(() => {
		const hasViewedToday = localStorage.getItem(`${popup.alt}`);

		if (hasViewedToday) {
			setShowPopup(false);
		}
	}, []);

	const handleClosePopup = () => {
		setShowPopup(false);
	};

	const handleTodayClose = () => {
		localStorage.setItem(`${popup.alt}`, 'true');

		setShowPopup(false);
	};

	return (
		<>
			{showPopup && (
				<div key={popup.alt}>
					<div className={popupPosition}>
						<figure className='bg-[#c9cdce] p-10 rounded-t-xl'>
							<a href="">
								<img src={popup.img} alt={popup.alt} className="w-full hover:scale-95" />
							</a>
						</figure>
							<div className='border-gray-400 text-center flex justify-around bg-[#e8e8e8]  rounded-b-xl px-2 py-2'>
								<button className="text-lg hover:scale-95 border-r-2 border-gray-200 border-spacing-2 px-4 pe-8" onClick={handleTodayClose}>
									다시 보지 않음
								</button>
								<button className="text-lg hover:scale-95 border-spacing-2 px-4 pe-8" onClick={handleClosePopup}>
									닫기
								</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default PopUp;
