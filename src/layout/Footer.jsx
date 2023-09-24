/**
 * Footer
 * */

function Footer() {
	return (
		<>
			<footer className="mb-6 mt-[90px]">
				<div className="flex justify-center bg-grey-500 text-base font-normal text-white">
					<div className="mt-18 max-w-[1920px] leading-[58px]">
						<ul className="mx-auto grid w-[1240px] grid-cols-8 text-center">
							<li>
								<a href="/" target="_blank">
									회사소개
								</a>
							</li>
							<li>
								<a href="/" target="_blank">
									입점상담
								</a>
							</li>
							<li>
								<a href="/" target="_blank">
									제휴문의
								</a>
							</li>
							<li>
								<a href="/" target="_blank">
									이용약관
								</a>
							</li>
							<li>
								<a href="/" target="_blank">
									개인정보처리방침
								</a>
							</li>
							<li>
								<a href="/" target="_blank">
									고객센터
								</a>
							</li>
							<li>
								<a href="/" target="_blank">
									채용정보
								</a>
							</li>
							<li>
								<a href="/" target="_blank">
									GLOBAL
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="text-500 flex justify-center gap-11 pt-10 text-sm font-light">
					<div>
						<dl>
							<dt>상호명 : ㈜더블유컨셉코리아 ㅣ 대표자 : 이은철 ㅣ 주소 : 서울특별시 강남구 테헤란로 231, EAST동 20층(역삼동, 센터필드)</dt>
							<dt>
								사업자등록번호 : 211-88-19183 ㅣ 통신판매업신고 : 제2009호-서울강남-00847호
								<a className="mx-1 border border-black px-2 py-[1px] text-sm font-medium" href="/" target="_blank">
									사업자정보확인
								</a>
								개인정보보호책임자 : 허선희 │ 호스팅서비스 : ㈜ 더블유컨셉코리아
							</dt>
							<dt>COPYRIGHT ⓒ ㈜더블유컨셉코리아 ALL RIGHTS RESERVED</dt>
						</dl>
					</div>

					<div className="border-gery-300 border-l-[1px] pl-10">
						<dl>
							<dt className="text-sm font-medium">소비자피해보상보험</dt>
							<dd className="inline">
								고객님은 안전거래를 위해 현금 결제 시, Wconcept 에서 가입한
								<br />
								소비자피해보상보험 서비스를 이용하실 수 있습니다.
								<br />
								보상대상 : 미배송/반품, 환불거부/쇼핑몰부도
								<a className="ml-1 inline border border-black px-2 py-[1px] text-sm font-medium" href="/" target="_blank">
									서비스 가입사실 확인
								</a>
							</dd>
						</dl>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
