/**
 *  ProductCategory component
 * */

function ProductCategory() {
	return (
		<section className="mr-6 w-1/5">
			<h3 className="border-b border-black py-4 text-2xl font-bold tracking-widest">
				<span className="block text-lg font-semibold tracking-tight">MEN</span>APPAREL
			</h3>

			<dl className="px-2 text-sm leading-8">
				<dt className="pt-5 text-lg font-bold text-tertiary">
					<a href="#">아우터</a>
					<button
						className="float-right mr-2 mt-3 block h-[9px] w-[9px]"
						style={{
							background: `url("https://static.wconcept.co.kr/web/images/common/spr-common.png") -30px -60px no-repeat`,
						}}
					></button>
				</dt>
				<dd className="text-tertiary underline decoration-1">
					<a href="#">VIEW ALL OUTER</a>
				</dd>
				<dd>
					<a href="#">자켓</a>
				</dd>
				<dd>
					<a href="#">점퍼</a>
				</dd>
				<dd>
					<a href="#">패딩</a>
				</dd>
				<dd>
					<a href="#">코트</a>
				</dd>
			</dl>

			<dl className="px-2 text-sm leading-8">
				<dt className="pt-5 text-lg font-bold text-tertiary">
					<a href="#">팬츠</a>
					<button
						className="float-right mr-2 mt-3 block h-[9px] w-[9px]"
						style={{
							background: `url("https://static.wconcept.co.kr/web/images/common/spr-common.png") 0 -60px no-repeat`,
						}}
					></button>
				</dt>
				<dd className="text-tertiary underline decoration-1">
					<a href="#">VIEW ALL PANTS</a>
				</dd>
				<dd>
					<a href="#">슬랙스</a>
				</dd>
				<dd>
					<a href="#">쇼츠</a>
				</dd>
				<dd>
					<a href="#">치노</a>
				</dd>
				<dd>
					<a href="#">스웻</a>
				</dd>
			</dl>

			<dl className="px-2 text-sm leading-8">
				<dt className="pt-5 text-lg font-bold text-tertiary">
					<a href="#">티셔츠</a>
					<button
						className="float-right mr-2 mt-3 block h-[9px] w-[9px]"
						style={{
							background: `url("https://static.wconcept.co.kr/web/images/common/spr-common.png") 0 -60px no-repeat`,
						}}
					></button>
				</dt>
				<dd className="text-tertiary underline decoration-1">
					<a href="#">VIEW ALL T-SHIRTS</a>
				</dd>
				<dd>
					<a href="#">반팔</a>
				</dd>
				<dd>
					<a href="#">스웻</a>
				</dd>
				<dd>
					<a href="#">후드</a>
				</dd>
				<dd>
					<a href="#">긴팔</a>
				</dd>
			</dl>

			<dl className="px-2 text-sm leading-8">
				<dt className="pt-5 text-lg font-bold text-tertiary">
					<a href="#">니트</a>
					<button
						className="float-right mr-2 mt-3 block h-[9px] w-[9px]"
						style={{
							background: `url("https://static.wconcept.co.kr/web/images/common/spr-common.png") 0 -60px no-repeat`,
						}}
					></button>
				</dt>
				<dd className="text-tertiary underline decoration-1">
					<a href="#">VIEW ALL NEAT</a>
				</dd>
				<dd>
					<a href="#">풀오버</a>
				</dd>
				<dd>
					<a href="#">가디건</a>
				</dd>
				<dd>
					<a href="#">베스트</a>
				</dd>
				<dd>
					<a href="#">터틀넥</a>
				</dd>
			</dl>
		</section>
	);
}

export default ProductCategory;
