import {CelebrityLabel, CouponLabel, NewSeasonLabel, OnlyLabel} from '@/components/category/ProductLabel';
import {formatNumber} from '@/utils/formatNumber';
import {getProductsImage} from '@/utils/getProductsImage';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

function ProductInfo({item, style = ''}) {
	return (
		<>
			<Link to={`/products/${item.id}`}>
				<motion.div className="img" whileHover={{opacity: 0.8}}>
					<img src={getProductsImage(item, 'photo')} alt={item.name} key={item.id} className='w-full h-full'/>
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
