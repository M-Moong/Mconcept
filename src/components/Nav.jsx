import icon_gnbLogo from '../../public/header/icon_gnbLogo.svg';
import cate_label from '../../public/header/cate_label.jpeg';
import cate_casual from '../../public/header/cate_casual.jpeg';
import cate_globalshop from '../../public/header/cate_globalshop.jpeg';
import cate_luxuryzone from '../../public/header/cate_luxuryzone.jpeg';
import cate_manneiProductPic from '../../public/header/cate_manneiProductPic.jpeg';
import NavList from './NavList.jsx';
import CategoryWomen from './CategoryWomen';
import CategoryMen from './CategoryMen';
import CategoryBeauty from './CategoryBeauty';
import CategoryLife from './CategoryLife';

function Nav() {
	return (
		<nav className="relative left-[0] right-[0] top-[0] z-[100] min-w-[1280px] max-w-[1920px] border-b-[1px] border-solid border-[#e9e9e9] bg-[#fff]">
			<div className="global_nav_wrap mx-auto h-[57px] max-w-[1920px] px-[20px]">
				<div className="global_nav flex justify-center">
					<ul className="nav_left flex ">
						<li className="symbol static hidden pr-[7px] pt-[9px] ease-in-out">
							<a href="/" className="inline-block p-[0] leading-[normal]">
								<img src={icon_gnbLogo} alt="M CONCEPT" />
							</a>
						</li>
						<NavList listTitle="NEW" />
						<NavList listTitle="MEN" />
						<NavList listTitle="WOMEN" />
						<NavList listTitle="BEAUTY" />
						<NavList listTitle="LIFE" />
						<NavList listTitle="SALE" />
						<NavList
							listTitle="DESIGNERE"
							navListAddStyle={[
								'pr-[30px]',
								"after:content-['']",
								'after:block',
								'after:w-[1px]',
								'after:h-[14px]',
								'after:bg-[#d9d9d9]',
								'after:absolute',
								'after:top-[50%]',
								'after:right-[0]',
								'after:mt-[-7px]',
							]}
						/>
					</ul>
					<ul className="nav_right flex">
						<NavList listTitle="PRE-SHOW" navListAddStyle={['pl-[30px]']} />
						<NavList listTitle="ORIGINAL" />
						<NavList listTitle="EVENT" />
						<NavList listTitle="BEST" />
					</ul>
					<ul className="utility float-right mr-[-17px] hidden pt-[26px] before:table before:content-[''] after:clear-both after:table after:content-['']">
						<li className="nav_search float-left text-center uppercase">
							<a href="" className="relative block px-[17px] pb-[18px] text-[#000]">
								<span className="icon_search inline-block h-[30px] w-[30px] bg-transparent bg-[url('../../public/header/icon_search.png')] bg-center bg-no-repeat align-top"></span>
								<strong className="absolute bottom-[0] left-[0] right-[0] text-[12px] uppercase leading-[12px]">serch</strong>
							</a>
						</li>
						<li className="nav_search float-left text-center uppercase">
							<a href="" className="relative block px-[17px] pb-[18px] text-[#000]">
								<span className="icon_search inline-block h-[30px] w-[30px] bg-transparent bg-[url('../../public/header/icon_heart.png')] bg-center bg-no-repeat align-top"></span>
								<strong className="absolute bottom-[0] left-[0] right-[0] text-[12px] uppercase leading-[12px]">Heart</strong>
							</a>
						</li>
						<li className="nav_search float-left text-center uppercase">
							<a href="" className="relative block px-[17px] pb-[18px] text-[#000]">
								<span className="icon_search inline-block h-[30px] w-[30px] bg-transparent bg-[url('../../public/header/icon_my.png')] bg-center bg-no-repeat align-top"></span>
								<strong className="absolute bottom-[0] left-[0] right-[0] text-[12px] uppercase leading-[12px]">my</strong>
							</a>
						</li>
						<li className="nav_search float-left text-center uppercase">
							<a href="" className="relative block px-[17px] pb-[18px] text-[#000]">
								<span className="icon_search inline-block h-[30px] w-[30px] bg-transparent bg-[url('../../public/header/icon_shopping.png')] bg-center bg-no-repeat align-top"></span>
								<strong className="absolute bottom-[0] left-[0] right-[0] text-[12px] uppercase leading-[12px]">0</strong>
							</a>
						</li>
					</ul>
				</div>
				{/* <div className="catagory_btn">
					<a
						className="absolute top-[0px] block w-[176px] overflow-hidden border-[1px] border-solid border-[#e9e9e9] pl-[14px] text-left text-[14px] leading-[46px] after:absolute after:right-[17px] after:top-[50%] after:mt-[-6px] after:block after:h-[12px] after:w-[12px] after:bg-[url('../../public/header/icon_catArrowOpen.svg')] after:bg-auto after:bg-center after:bg-no-repeat after:content-['']"
						href="/"
					>
						CATEGORY
					</a>
					<div className="second_nav absolute left-[0] right-[0] top-[47px] z-[99px] cursor-default border-t-[1px] border-solid border-[#e9e9e9] bg-[#fff]">
						<div className="second_nav_cont after:content[''] relative mx-[auto] my-[0] min-h-[324px] w-[100%] max-w-[1920px] pb-[30px] pl-[20px] pr-[0] pt-[16px] text-left before:absolute before:left-[21px] before:top-[-2.5px] before:block before:h-[5px] before:w-[174px] before:bg-[#fff] before:content-[''] after:invisible after:clear-both after:block after:h-[0]">
							<div className="category_wrap relative float-left pt-[14px]">
								<div className="category_men flex w-[1232px] flex-wrap content-start pl-[170px]">
									<a
										href="/"
										className="absolute left-[0] top-[0px] h-[47px] w-[170px] pl-[15px] text-[17px] uppercase leading-[47px]  after:absolute after:right-[17px] after:top-[50%] after:mt-[-5px] after:block after:h-[10px] after:w-[9px] after:bg-[url('../../public/header/icon_arrowRight.svg')] after:bg-auto after:bg-center after:bg-no-repeat after:content-['']"
									>
										men
									</a>
									<CategoryMen />
								</div>
								<div className="category_women flex w-[1232px] flex-wrap content-start pl-[170px]">
									<a
										href="/"
										className="absolute left-[0] top-[47px] h-[47px] w-[170px] pl-[15px] text-[17px] uppercase leading-[47px] after:absolute  after:right-[17px] after:top-[50%] after:mt-[-5px] after:block after:hidden after:h-[10px] after:w-[9px] after:bg-[url('../../public/header/icon_arrowRight.svg')] after:bg-auto after:bg-center after:bg-no-repeat after:content-['']"
									>
										women
									</a>
									<CategoryWomen />
								</div>
								<div className="category_beauty flex w-[1232px] flex-wrap content-start pl-[170px]">
									<a
										href="/"
										className="absolute left-[0] top-[94px] h-[47px] w-[170px] pl-[15px] text-[17px] uppercase leading-[47px] after:absolute  after:right-[17px] after:top-[50%] after:mt-[-5px] after:block after:hidden after:h-[10px] after:w-[9px] after:bg-[url('../../public/header/icon_arrowRight.svg')] after:bg-auto after:bg-center after:bg-no-repeat after:content-['']"
									>
										beauty
									</a>
									<CategoryBeauty />
								</div>
								<div className="category_beauty flex w-[1232px] flex-wrap content-start pl-[170px]">
									<a
										href="/"
										className="absolute left-[0] top-[141px] h-[47px] w-[170px] pl-[15px] text-[17px] uppercase leading-[47px] after:absolute  after:right-[17px] after:top-[50%] after:mt-[-5px] after:block after:hidden after:h-[10px] after:w-[9px] after:bg-[url('../../public/header/icon_arrowRight.svg')] after:bg-auto after:bg-center after:bg-no-repeat after:content-['']"
									>
										life
									</a>
									<CategoryLife />
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</nav>
	);
}

export default Nav;
