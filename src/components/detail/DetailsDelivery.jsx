import '@/styles/detail.css';

function DetailsDelivery() {
	return (
		<section id="delivery" className="pt-10">
			<div className="detailTabBtn mb-16 grid grid-cols-4 font-normal text-gray-700">
				<a href="#detail" className="detailTabBtn01 py-4 text-center text-mlg">
					DETAIL
				</a>
				<a href="#review" className="detailTabBtn02 py-4 text-center text-mlg">
					REVIEW (55)
				</a>
				<a href="#question" className="detailTabBtn03 py-4 text-center text-mlg">
					Q&A (12)
				</a>
				<a href="#delivery" className="detailTabBtnOn py-4 text-center text-mlg">
					RETURN & DELIVERY
				</a>
			</div>
			<span className="mb-3 block text-mlg">배송/교환/반품/AS 관련 유의사항</span>
			<span className="mb-4 block text-base text-grey-800">상품상세설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음 안내사항보다 우선 적용됩니다.</span>
			<table>
				<tbody>
					<tr>
						<th className="w-[270px] border-t border-[#d5d5d5] bg-gray-50 text-center text-lg font-normal">배송정보</th>
						<td>
							<ul className="border-t border-[#d5d5d5] px-10 py-10 text-sm text-grey-800">
								<li className="ml-2 list-disc pb-3">상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이 달라집니다.</li>
								<li className="ml-2 list-disc pb-3">일부 주문상품 또는 예약상품의 경우 기본 배송일 외에 추가 배송 소요일이 발생될 수 있습니다.</li>
								<li className="ml-2 list-disc pb-3">동일 브랜드의 상품이라도 상품별 출고일시가 달라 각각 배송될 수 있습니다.</li>
								<li className="ml-2 list-disc pb-3">제주 및 도서산간 지역은 출고, 반품, 교환시 추가 배송비(항공, 도선료)가 부과 될 수 있습니다.</li>
								<li className="ml-2 list-disc">상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및 휴일은 배송이 불가합니다.</li>
							</ul>
						</td>
					</tr>
					<tr>
						<th className="w-[270px] border-t border-[#d5d5d5] bg-gray-50 text-center text-lg font-normal">취소/반품/교환 안내</th>
						<td>
							<ul className="border-t border-[#d5d5d5] px-10 py-10 text-sm text-grey-800">
								<li className="ml-2 list-disc pb-3">상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이 달라집니다.</li>
								<li className="ml-2 list-disc pb-3">일부 주문상품 또는 예약상품의 경우 기본 배송일 외에 추가 배송 소요일이 발생될 수 있습니다.</li>
								<li className="ml-2 list-disc pb-3">동일 브랜드의 상품이라도 상품별 출고일시가 달라 각각 배송될 수 있습니다.</li>
								<li className="ml-2 list-disc pb-3">제주 및 도서산간 지역은 출고, 반품, 교환시 추가 배송비(항공, 도선료)가 부과 될 수 있습니다.</li>
								<li className="ml-2 list-disc">상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및 휴일은 배송이 불가합니다.</li>
							</ul>
						</td>
					</tr>
					<tr>
						<th className="w-[270px] border-t border-[#d5d5d5] bg-gray-50 text-center text-lg font-normal">반품/교환 불가능한 경우</th>
						<td>
							<ul className="border-t border-[#d5d5d5] px-10 py-10 text-sm text-grey-800">
								<li className="ml-2 list-disc pb-3">회수지 정보 : 경기도 남양주시 경춘로 1288 (평내동) FMJ 물류센터 / 주식회사 에프엠제이인터내셔날</li>
								<li className="ml-2 list-disc pb-3">동일 브랜드의 상품이라도 교환/반품 회수지가 다를 수 있습니다. 상품상세 정보 또는 회수지 정보를 확인하신 후 반드시 지정된 회수지로 보내주세요.</li>
								<li className="ml-2 list-disc pb-3">상품을 지정된 회수지가 아닌곳으로 보내실 경우 택배 분실 또는 재발송에 따른 추가 비용이 발생할 수 있습니다.</li>
								<li className="ml-2 list-disc pb-3">
									고객센터나 "My Page&#62;주문취소/교환/반품 신청"을 통한 교환/반품 접수 없이 상품을 회수지로 보내실 경우 재발송에 따른 추가 비용이 발생할 수 있으며 경우에 따라서는 교환/반품이 어려울
									수 있습니다.
								</li>
								<li className="ml-2 list-disc pb-3 font-medium text-black">
									상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품 택배비 고객부담으로 왕복택배비가 발생합니다. (전자상거래 등에서의 소비자보호에 관한 법률 제18조(청약 철회등)9항에 의거
									소비자의 사정에 의한 청약 철회 시 택배비는 소비자 부담입니다.)
								</li>
								<li className="ml-2 list-disc pb-3">결제완료 직후 즉시 주문취소는 "MY Page&#62; 취소/교환/반품 신청"에서 직접 처리 가능합니다.</li>
								<li className="ml-2 list-disc pb-3">주문완료 후 재고 부족 등으로 인해 주문 취소 처리가 될 수도 있는 점 양해 부탁드립니다.</li>
								<li className="ml-2 list-disc pb-3">주문상태가 상품준비중인 경우 취소신청이 가능하며 판매자의 승인 여부(이미 배송을 했거나 포장을 완료한 경우)에 따라 취소가 불가능할 수 있습니다.</li>
								<li className="ml-2 list-disc pb-3">교환 신청은 최초 1회에 한하며, 교환 배송 완료 후에는 추가 교환 신청은 불가합니다.</li>
								<li className="ml-2 list-disc pb-3">반품/교환은 미사용 제품에 한해 배송완료 후 7일 이내 접수하여 주십시오.</li>
								<li className="ml-2 list-disc pb-3">임의반품은 불가하오니 반드시 고객센터나 "MY Page&#62; 주문취소/교환/반품 신청"을 통해서 신청접수를 하시기 바랍니다.</li>
								<li className="ml-2 list-disc pb-3">상품하자, 오배송의 경우 택배비 무료로 교환/반품이 가능하지만 모니터의 색상차이, 착용감, 사이즈의 개인의 선호도는 상품의 하자 사유가 아닙니다.</li>
								<li className="ml-2 list-disc pb-3">고객 부주의로 상품이 훼손, 변경된 경우 반품 / 교환이 불가능 합니다.</li>
								<li className="ml-2 list-disc">취소/반품 대금환불이 지연 시 전자상거래법에 의거하여 환불지연 배상처리 절차가 진행됩니다.</li>
							</ul>
						</td>
					</tr>
					<tr>
						<th className="w-[270px] border-b border-t border-[#d5d5d5] bg-gray-50 text-center text-lg font-normal">A/S 안내</th>
						<td>
							<ul className="border-b border-t border-[#d5d5d5] px-10 py-10 text-sm text-grey-800">
								<li className="ml-2 list-disc pb-3">A/S 기준이나 가능여부는 브랜드와 상품에 따라 다르므로 관련 문의는 더블유컨셉 고객센터를 통해 부탁드립니다.</li>
								<li className="ml-2 list-disc">상품불량에 의한 반품, 교환, A/S, 환불, 품질보증 및 피해보상 등에 관한 사항은 소비자분쟁해결기준(공정거래위원회 고시)에 따라 받으실 수 있습니다.</li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
}

export default DetailsDelivery;
