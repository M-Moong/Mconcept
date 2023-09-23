import pb from '@/api/pocketbase';
import ProductCategory from '@/components/category/ProductCategory';
import ProductFilterList from '@/components/category/ProductFilterBrandList';
import ProductNav from '@/components/category/ProductNav';
import ProductPadding from '@/components/category/ProductPadding';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 *  Category Page
 * */

function CategoryBrand() {
	const productFilterListRef = useRef(null);

	// 서버에 데이터 요청/응답
	// 응답 받은 데이터 상태로 설정해서 공유
	// 자식들(children)
	// - ProductFilterList
	// - ProductItems
	const [brands, setBrands] = useState([]); // 상품 브랜드 이름 목록
	const [products, setProducts] = useState([]); // 상품 정보 목록
	const [filteredBrands, setFilteredBrands] = useState([]); // 사용자에 의해 체크된  브랜드 이름 목록
	const [filteredBrandList, setFilteredBrandList] = useState([]); // 필터 적용 버튼을 누를 때 필터링 되도록 하기 위한 상태

	const handleChangeFilter = (newBrandName) => {
		setFilteredBrands((filteredBrands) => [...filteredBrands, newBrandName]);
	};

	const handleAssignFilter = () => {
		setFilteredBrandList(filteredBrands);
	};

	const handleResetFilteredBrandList = () => {
		// 선언형 프로그래밍 방식
		setFilteredBrands([]);
		setFilteredBrandList([]);
		// 명령형 프로그래밍 방식으로 모든 인풋의 체크 상태 초기화
		const checkboxes = productFilterListRef.current.querySelectorAll('input');
		checkboxes.forEach((checkbox) => {
			if (checkbox.checked) {
				checkbox.checked = false;
			}
		});
	};

	useEffect(() => {
		async function getProducts() {
			try {
				const productList = await pb.collection('products').getFullList();
				const brandList = Array.from(new Set(productList.map((product) => product.brand)));
				setBrands(brandList);
				setProducts(productList);
			} catch (error) {
				throw new Error('error');
			}
		}
		getProducts();
	}, []);

	// 사용자가 필터링할 브랜드를 체크하고 필터 적용 버튼을 누르면 그 때 필터링된 리스트 데이터를 파생된 리스트 데이터로 설정합니다.
	// 파생된 상태(filtteredProducts) ← 필터링(filteredBrandList) ← 상태(products: 192)

	const filteredProducts =
		filteredBrandList.length === 0
			? products
			: products.filter((product) => {
					let isFiltered = false;

					for (const filterBrandName of filteredBrandList) {
						if (product.brand === filterBrandName) {
							isFiltered = true;
							break;
						}
					}

					return isFiltered;
			  });

	return (
		<>
			<Helmet>
				<title> 카테고리 | M CONCEPT </title>
			</Helmet>
			<main className="m-auto mt-6 flex max-w-[1980px] px-2">
				<ProductCategory />

				<section className="w-4/5">
					<ProductNav />

					<ProductFilterList ref={productFilterListRef} brands={brands} onFilter={handleChangeFilter} onAssign={handleAssignFilter} onReset={handleResetFilteredBrandList} />

					<div className="product-quantity border-t-2 border-black py-4 text-left">
						<span className="text-sm font-light text-black">
							<em className="a11y text-mlg font-normal not-italic">{filteredProducts.length}</em> 개의 상품
						</span>
					</div>

					<ProductPadding data={filteredProducts} />

				</section>
			</main>
		</>
	);
}

export default CategoryBrand;
