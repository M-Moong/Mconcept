import {Helmet} from 'react-helmet-async';
import JoinBannerDouble from '@/assets/images/joinComplete/joinComplete_banner_double.jpeg';
import JoinBannerCoupon from '@/assets/images/joinComplete/joinComplete_banner_coupon.jpeg';
import {NavLink} from 'react-router-dom';

function JoinCompplete() {
	return (
		<>
			<Helmet>
				<title>JoinComplete | M CONCEPT</title>
			</Helmet>
			<section className="joinComplete_container mb-[90px]">
				<h2 className="sub_title leading-[ 44px] min-w-[1240px] pb-[10px] pt-[55px] text-center text-[44px] uppercase">JOIN MEMBER</h2>
				<div className="member_join mx-[auto] w-[1240px]">
					<p className="mb-[8px] border-t-[2px] border-[#171717]  border-[solid] pt-[30px] text-center text-[38px] uppercase leading-[54px] text-[#333]">W PEOPLE이 되신 것을 환영합니다!</p>
					<p className=" pb-[20px] text-center text-[20px] uppercase  leading-[26px] text-[#333]">w컨셉과 함께 자신만의 컨셉을 만들어보세요.</p>
					<NavLink to="/">
						<button className="mx-[auto] mb-[80px] mt-[37px] block h-[70px] w-[320px] bg-[#000] text-center text-[20px] leading-[68px] text-[#fff]">쇼핑하러가기</button>
					</NavLink>
					<p className="mb-[24px] text-center text-[26px] leading-[32px]">신규회원만을 위한 스페셜 혜택</p>
					<ul className="banner_list">
						<li className="mb-[20px]">
							<a href="#" className="block text-center ">
								<img className="mx-[auto] h-[380px] w-[670px]" src={JoinBannerDouble} alt="banner_image" />
							</a>
						</li>
						<li className="mb-[20px]">
							<a href="#" className="block  text-center">
								<img className="mx-[auto] h-[238px] w-[670px]" src={JoinBannerCoupon} alt="banner_image" />
							</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}
export default JoinCompplete;
