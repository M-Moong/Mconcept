import {getProductsImage} from '@/utils/getProductsImage';
import { CelebrityLabel, CouponLabel, NewSeasonLabel, OnlyLabel } from './category/ProductLabel';
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';

// 할인가격의 뒤에서 세번째 자리에 ',' 추가하는 정규식
function formatNumber(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function ProductInfo({item, style=''}) {

	return (
		<>
			<Link to={`/products/${item.id}`}>
				<motion.div className="img"	whileHover={{ opacity : 0.8}}>
					<motion.img src={getProductsImage(item, 'photo')} alt={item.name} key={item.id} whileHover={{ scale: 1.04 }}/>
				</motion.div>

				<div className="relative">
					<dl className={style[0]}>
						<dt className="sr-only" aria-label="제목"></dt>
						<dd className="py-3 text-base font-semibold">{item.brand}</dd>
						<dt className="sr-only" aria-label="이름"></dt>
						<dd className="h-[20px] pb-1 text-sm font-normal text-secondary">{item.name}</dd>
						<dt className="sr-only" aria-label="설명"></dt>
						<dd className="h-[50px] pb-1 text-sm font-normal text-secondary">{item.description}</dd>

						<dt className="sr-only" aria-label="할인가격"></dt>
						<dd className="b-0 inline font-semibold text-grey-800">{formatNumber(Math.floor(item.price * (1 - item.discount)))}</dd>
						<dt className="sr-only" aria-label="가격"></dt>
						{item.discount === 0 ? null : <dd className={`b-0 ${style[1]} inline text-xs font-medium text-grey-200 line-through`}>{item.price}</dd>}
						<dt className="sr-only" aria-label="할인율"></dt>
						<dd className={`b-0 inline ${style[2]} font-bold text-tertiary`}>{item.discount !== 0 ? `${Math.floor(item.discount * 100)}%` : null}</dd>
						<dt className="sr-only" aria-label="태그"></dt>

						{item.newSeason && <NewSeasonLabel />}
						{item.celebrity && <CelebrityLabel />}
						{item.coupon && <CouponLabel />}
						{item.only && <OnlyLabel />}
					</dl>
				</div>
			</Link>
		</>
	);
}

export default ProductInfo;


