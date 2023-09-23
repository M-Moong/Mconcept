/**
 *  ProductSort component
 * */

function ProductSort() {
	return (
		<div className="product-sort float-right inline-block">
			<button className="border border-grey-300 px-4 py-1 text-base text-grey-400" type="button">
				신상품순
				<span
					className="float-right ml-4 mt-[2px] h-[11px] w-[11px]"
					style={{
						background: `url('../../public/common/sprīt.png') -238px 6px no-repeat`,
					}}
				></span>
			</button>

			<ul className="hidden">
				<li>
					<a href="/">신상품순</a>
				</li>
				<li>
					<a href="/">판매순</a>
				</li>
				<li>
					<a href="/">할인율순</a>
				</li>
				<li>
					<a href="/">낮은 가격 순</a>
				</li>
				<li>
					<a href="/">높은 가격 순</a>
				</li>
				<li>
					<a href="/">리뷰순</a>
				</li>
			</ul>
		</div>
	);
}

export default ProductSort;
