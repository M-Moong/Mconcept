import lock from '@/assets/images/detail/lock.png';
import '@/styles/detail.css';

function DetailsQuestion() {
	return (
		<section id="question" className="mb-20 pt-10">
			<div className="detailTabBtn mb-16 grid grid-cols-4 font-normal text-gray-700">
				<a href="#detail" className="detailTabBtn01 py-4 text-center text-mlg">
					DETAIL
				</a>
				<a href="#review" className="detailTabBtn02 py-4 text-center text-mlg">
					REVIEW (55)
				</a>
				<a href="#question" className="detailTabBtnOn py-4 text-center text-mlg">
					Q&A (12)
				</a>
				<a href="#delivery" className="detailTabBtn04 removeLine py-4 text-center text-mlg">
					RETURN & DELIVERY
				</a>
			</div>

			<div className="relative mb-4 block h-[50px]">
				<button className="absolute right-0 h-[50px] w-[180px] bg-black text-white">상품문의</button>
			</div>

			<table>
				<tbody>
					<tr className="flex flex-row justify-between border-t-2 border-black p-6">
						<td className="mr-6 mt-1 h-[18px] bg-black px-1.5 text-xs text-white">답변완료</td>
						<td className="relative flex w-[1020px] flex-row">
							<p className="flex flex-row">
								<a href="" className="mr-3 text-base">
									사이즈
								</a>
								<img src={lock} alt="" className="h-[18px] w-[15px]" />
							</p>
							<span className="absolute right-0 w-[200px] text-base">lh*******@gmail.com</span>
						</td>
						<td className="text-base font-normal text-[#666]">2023. 09. 16</td>
					</tr>

					<tr className="flex flex-row justify-between border-t border-[#d5d5d5] p-6">
						<td className="mr-6 mt-1 h-[18px] bg-black px-1.5 text-xs text-white">답변완료</td>
						<td className="relative flex w-[1020px] flex-row">
							<p className="flex flex-row">
								<a href="" className="mr-3 text-base">
									교환 받았는데요
								</a>
								<img src={lock} alt="" className="h-[18px] w-[15px]" />
							</p>
							<span className="absolute right-0 w-[200px] text-base">de*****@naver.com</span>
						</td>
						<td className="text-base font-normal text-[#666]">2023. 09. 02</td>
					</tr>

					<tr className="flex flex-row justify-between border-t border-[#d5d5d5] p-6">
						<td className="mr-6 mt-1 h-[18px] bg-black px-1.5 text-xs text-white">답변완료</td>
						<td className="relative flex w-[1020px] flex-row">
							<p className="flex flex-row">
								<a href="" className="mr-3 text-base">
									문의
								</a>
								<img src={lock} alt="" className="h-[18px] w-[15px]" />
							</p>
							<span className="absolute right-0 w-[200px] text-base">sy*******@naver.com</span>
						</td>
						<td className="text-base font-normal text-[#666]">2023. 08. 23</td>
					</tr>

					<tr className="flex flex-row justify-between border-t border-[#d5d5d5] p-6">
						<td className="mr-6 mt-1 h-[18px] bg-black px-1.5 text-xs text-white">답변완료</td>
						<td className="relative flex w-[1020px] flex-row">
							<p className="flex flex-row">
								<a href="" className="mr-3 text-base">
									배송언제오나요 ㅠㅠ
								</a>
								<img src={lock} alt="" className="h-[18px] w-[15px]" />
							</p>
							<span className="absolute right-0 w-[200px] text-base">s2*****@daum.com</span>
						</td>
						<td className="text-base font-normal text-[#666]">2023. 08. 12</td>
					</tr>

					<tr className="flex flex-row justify-between border-t border-[#d5d5d5] p-6">
						<td className="mr-6 mt-1 h-[18px] bg-black px-1.5 text-xs text-white">답변완료</td>
						<td className="relative flex w-[1020px] flex-row">
							<p className="flex flex-row">
								<a href="" className="mr-3 text-base">
									사이즈
								</a>
								<img src={lock} alt="" className="h-[18px] w-[15px]" />
							</p>
							<span className="absolute right-0 w-[200px] text-base">de*******@gmail.com</span>
						</td>
						<td className="text-base font-normal text-[#666]">2023. 07. 31</td>
					</tr>

					<tr className="flex flex-row justify-between border-y border-[#d5d5d5] p-6">
						<td className="mr-6 mt-1 h-[18px] bg-black px-1.5 text-xs text-white">답변완료</td>
						<td className="relative flex w-[1020px] flex-row">
							<p className="flex flex-row">
								<a href="" className="mr-3 text-base">
									색상 궁금합니다.
								</a>
								<img src={lock} alt="" className="h-[18px] w-[15px]" />
							</p>
							<span className="absolute right-0 w-[200px] text-base">sy****@gmail.com</span>
						</td>
						<td className="text-base font-normal text-[#666]">2023. 07. 16</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
}

export default DetailsQuestion;
