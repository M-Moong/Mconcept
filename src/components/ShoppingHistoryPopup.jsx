import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import close from '/public/common/popup_close.svg';

function ShoppingHistoryPopup({isOpen, setIsOpen}) {
	const [shoppingHistory, setShoppingHistory] = useState([]);
	
	// 로컬 스토리지에서 최근 본 상품 목록 가져오기
	useEffect(() => {
		const storedShoppingHistory = JSON.parse(localStorage.getItem('shoppingHistory'));
		if (storedShoppingHistory) {
			setShoppingHistory(storedShoppingHistory);
		}
	}, []);

	useEffect(() => {
    // 컴포넌트가 마운트되면 body의 overflow를 hidden으로 설정하여 스크롤 제거
    document.body.style.overflow = 'hidden';

    return () => {
      // 컴포넌트가 언마운트되면 body의 overflow를 원래대로 되돌림(스크롤 복구)
      document.body.style.overflow = 'auto';
    };
  }, []);

	const closeModal = (e) => {
		e.stopPropagation();
		setIsOpen(false);
	};

	const stopPropagation = (e) => {
		e.stopPropagation();
	};

	return (
		<>
			<div>
				<div className="fixed left-0 top-0 z-[102] h-full w-full bg-[rgba(0,0,0,0.2)]" onClick={closeModal}>
					<motion.div
						initial={{x: 500, opacity: 0.5}}
						animate={{x: 0, opacity: 1}}
						transition={{
							duration: 0.5,
							type: 'tween',
						}}
						className='z-[103] float-right h-full w-1/4 transform bg-white pt-2'
						onClick={stopPropagation}
					>
						<button className="float-right mt-3 h-12 w-12 hover:scale-105 active:scale-75" onClick={closeModal}>
							<img src={close} alt="닫기" className="h-full w-full" />
						</button>
						<h2 className="p-4 text-2xl font-bold">SHOPPING HISTORY</h2>
						<div className="content border-t-2 p-6">
							<ul className="flex-col-reverse">
								{shoppingHistory.length > 0 ? shoppingHistory.map((product) => <li key={product.name}>{product.name}</li>) : <p className="text-lg font-medium">최근에 본 상품이 없습니다.</p>}
							</ul>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
}

export default ShoppingHistoryPopup;
