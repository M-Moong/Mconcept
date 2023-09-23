// 할인가격의 뒤에서 세번째 자리에 ',' 추가하는 정규식
export function formatNumber(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}