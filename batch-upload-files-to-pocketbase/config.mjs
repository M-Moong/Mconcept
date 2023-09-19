/* 사용자 정의 구성 ---------------------------------------------------------------- */

// 1. 포켓호스트 URL을 작성합니다.
export const PB_URL = 'https://little-manchester.pockethost.io';

// 2. 업로드 할 콜렉션(collection) 이름을 작성합니다.
export const PB_COLLECTION = 'products';

// 3. 이미지를 저장할 필드(field) 이름을 작성합니다.
export const IMAGE_KEY = 'photo';
export const IMAGE_KEY2 = 'details';

// 4. 업로드 디렉토리(폴더) 이름을 설정합니다.
export const UPLOAD_DIR = 'uploads';

// 5. 업로드 할 데이터를 작성합니다.
//    - 저장할 콜렉션에 해당 필드가 존재해야 합니다.
//    - 필드 타입(문자, 숫자, 파일 등)을 고려해 설정하세요.
//    - 파일 필드의 경우 업로드 폴더 안에 있는 파일 이름이 정확해야 합니다.

export const uploadDataList = [
	// 예시 데이터
	{
		photo: ['outer_1_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'UNALLOYED',
		description: 'VELOUR CORDUROY BLOUSON / BURGUNDY',
		name: '',
		color: 'BURGUNDY',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '아우터',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 259000,
		discount: 0,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: false,
		c: '',
	},
	{
		photo: ['outer_2_thumbnail.png'],
		details: ['outer_details_1_2.png', 'outer_details_2_1.png'],
		brand: 'UNALLOYED',
		description: 'STAR ZIP-UP HOODIE / PURPLE',
		name: 'STAR ZIP-UP HOODIE',
		color: 'PURPLE',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '아우터',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 148000,
		discount: 0,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_3_thumbnail.png'],
		details: ['outer_details_1_3.png', 'outer_details_2_1.png'],
		brand: 'UNALLOYED',
		description: 'PIGMENT MA-1 JUMPER / CHARCOAL',
		name: 'PIGMENT MA-1 JUMPER',
		color: 'CHARCOAL',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '아우터',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 348000,
		discount: 0,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: false,
		c: '',
	},
	{
	    photo: ['outer_4_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'UNALLOYED',
	    description: 'SYMBOL CHECK JACKET / NAVY&ORANGE',
	    name: 'SYMBOL CHECK JACKET',
	    color: 'ORANGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 289000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: false,
	    c: '',
	},
	{
	    photo: ['outer_5_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'UNALLOYED',
	    description: 'SYMBOL CHECK JACKET / BROWN&GREEN',
	    name: 'SYMBOL CHECK JACKET',
	    color: 'GREEN',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 289000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: false,
	    c: '',
	},
	{
	    photo: ['outer_6_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'UNALLOYED',
	    description: 'DOCKING KNIT JACKET / BLACK',
	    name: 'DOCKING KNIT JACKET',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 328000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: false,
	    c: '',
	},
	{
	    photo: ['outer_7_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'MIND BRIDGE',
	    description: '조직변형자켓 MXJK7121',
	    name: '',
	    color: 'BURGUNDY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 143100,
	    discount: 0.1,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: true,
	    c: '',
	},
	{
	    photo: ['outer_8_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'LENUCU',
	    description: '23FW LENUCU [남성] 스트링 아노락_화이트',
	    name: '',
	    color: 'WHITE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 118000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: true,
	    c: '',
	},
	{
	    photo: ['outer_9_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'MIND BRIDGE',
	    description: '코듀로이자켓 MXJK7122',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 143100,
	    discount: 0.1,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: true,
	    c: '',
	},
	{
	    photo: ['outer_10_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'WV PROJECT',
	    description: '검프 후드집업 네이비 JIHD7693',
	    name: '',
	    color: 'NAVY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 46710,
	    discount: 0.27,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: true,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: true,
	    c: '',
	},
	{
	    photo: ['outer_11_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'RUGGED HOUSE',
	    description: '포인트 워시드 비건 레더 오버핏 자켓 블랙',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 115000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: true,
	    c: '',
	},
	{
	    photo: ['outer_12_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'ADHOC',
	    description: '23 FW 남여공용 컬러데님 베이직 트러커 (BLACK)',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 71910,
	    discount: 0.4,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: true,
	    c: '',
	},
	{
	    photo: ['outer_13_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'WV PROJECT',
	    description: '샤인 윈드브레이커 블랙 JNOT7644',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 58410,
	    discount: 0.31,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: true,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: true,
	    c: '',
	},
	{
	    photo: ['outer_14_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'WV PROJECT',
	    description: '검프 후드집업 그레이 JIHD7693',
	    name: '',
	    color: 'GREY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 46710,
	    discount: 0.27,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: true,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: true,
	    c: '',
	},
	{
	    photo: ['outer_15_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'ADHOC',
	    description: '23 FW 남성 컬러 데님 코치형 점퍼 (DK-GREY)',
	    name: '',
	    color: 'GREY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 89910,
	    discount: 0.4,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: true,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: true,
	    c: '',
	},
	{
	    photo: ['outer_16_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'ADHOC',
	    description: '23 FW 남성 절개플랩 후드디테쳐블 인조가죽 점퍼 (LT-BEIGE)',
	    name: '',
	    color: 'BEIGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 161910,
	    discount: 0.38,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: true,
	    c: '',
	},
	{
	    photo: ['outer_17_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'ADHOC',
	    description: '23 FW 남성 절개플랩 후드디테쳐블 인조가죽 점퍼 (BLACK)',
	    name: '',
	    color: 'BEIGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 161910,
	    discount: 0.38,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: true,
	    c: '',
	},
	{
	    photo: ['outer_18_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'FLUKE',
	    description: '[72H POP-UP][~9/10까지]',
	    name: '플루크 블록코어 웜업 자켓 FJK107 / 4color',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 1,
	    price: 69800,
	    discount: 0.4,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: true,
	    c: '',
	},
	{
	    photo: ['outer_19_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'Wrangler',
	    description: '[한정특가]',
	    name: '유니 릴렉스 리버스 후드집업 오트밀',
	    color: 'BEIGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 1,
	    price: 98100,
	    discount: 0.1,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: true,
	    c: '',
	},
	{
	    photo: ['outer_20_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'Wrangler',
	    description: '[한정특가]',
	    name: '유니 릴렉스 리버스 후드집업 네이비',
	    color: 'NAVY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 1,
	    price: 98100,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: true,
	    c: '',
	},
	{
	    photo: ['outer_21_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'EZIO',
	    description: 'Detachable Hood Y Neck Padded Jumper',
	    name: '',
	    color: 'BEIGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 328000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_22_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'EZIO',
	    description: 'Detachable Hood Quilting Jumper - Navy',
	    name: '',
	    color: 'NAVY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 328000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_23_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'EZIO',
	    description: 'Detachable Hood Quilting Jumper - Brown',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 328000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_24_thumbnail.png'],
	    details: ['outer_details_1_4.png', 'outer_details_2_1.png'],
	    brand: 'EZIO',
	    description: 'Satin Soft Glossy Varsity Jumper',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '아우터',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 259000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: true,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_1_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: 'marlane stripe double breasted suit jacket_CWFBW23205NYX',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 470000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_2_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: '[snug] melange grey covy fit jacket (set-up)_CWJAW23856GYM',
	    name: '',
	    color: 'GREY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 449000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_3_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: 'mesh texture navy suit jacket_CWFBW23203NYX',
	    name: '',
	    color: 'NAVY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 410000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_4_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: 'padded balmacaan coat_CWCAA23504BKX',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 549000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_5_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: '[snug] cotton covy jacket (set-up)_CWJAW23854GYD',
	    name: '',
	    color: 'BEIGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 429000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_6_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: '[snug] cotton covy jacket (set-up)_CWJAW23854GYD',
	    name: '',
	    color: 'BEIGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 429000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_7_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: '[snug] black wool covy jacket (set-up)_CWJAW23853BKX',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 449000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_8_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: 'boucle wool patterned vest_CWUAW23751BRX',
	    name: '',
	    color: 'BEIGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 399000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_9_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: 'boucle wool patterned vest_CWUAW23751GRX',
	    name: '',
	    color: 'KHAKII',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 399000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_10_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: 'down quilting shirt jumper_CWUAW23711BKX',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 359000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_11_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: 'down quilting shirt jumper_CWUAW23711BEX',
	    name: '',
	    color: 'BEIGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 359000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_12_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: 'down quilting shirt jumper_CWUAW23711MUX',
	    name: '',
	    color: 'ORANGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 359000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_13_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: 'down quilting long jumper_CWUAW23712BKX',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 359000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_14_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: '2-way middle field jacket_CWUAW23771GRD',
	    name: '',
	    color: 'KHAKII',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 629000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_15_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: '2-way middle field jacket_CWUAW23771BEX',
	    name: '',
	    color: 'BEIGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 629000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_16_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: '[아울렛 전용] fur collar down jumper_C9UAW23811BEX',
	    name: '',
	    color: 'GREY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 429000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_17_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: '[아울렛 전용] fur collar down jumper_C9UAW23811BKX',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 429000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_18_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: '[아울렛전용] padding outer shirt_C9UAW23712NYD',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 249000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_19_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'RUGGED HOUSE',
	    description: '미니멀 코튼 오버핏 하프 코트 베이지',
	    name: '',
	    color: 'BEIGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 120000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_20_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'RUGGED HOUSE',
	    description: '미니멀 코튼 오버핏 하프 코트 카키',
	    name: '',
	    color: 'KHAKII',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 120000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_21_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'RUGGED HOUSE',
	    description: '미니멀 코튼 오버핏 하프 코트 블랙',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 120000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_22_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'UNALLOYED',
	    description: 'VELOUR CORDUROY BLOUSON / BURGUNDY',
	    name: '',
	    color: 'BURGUNDY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 259000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_23_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'UNALLOYED',
	    description: 'STAR ZIP-UP HOODIE / PURPLE',
	    name: '',
	    color: 'PURPLE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 148000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jacket_24_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'UNALLOYED',
	    description: 'PIGMENT MA-1 JUMPER / CHARCOAL',
	    name: '',
	    color: 'PURPLE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 348000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_1_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'UNALLOYED',
	    description: 'VELOUR CORDUROY BLOUSON / BURGUNDY',
	    name: '',
	    color: 'BURGUNDY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '점퍼',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 259000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_2_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'UNALLOYED',
	    description: 'PIGMENT MA-1 JUMPER / CHARCOAL',
	    name: '',
	    color: 'CHARCOAL',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '점퍼',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 348000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_3_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'LENUCU',
	    description: '23FW LENUCU [남성] 스트링 아노락_화이트',
	    name: '',
	    color: 'WHITE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '점퍼',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 118000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_4_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'LENUCU',
	    description: '23FW LENUCU [남성] 스트링 아노락_블랙',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '점퍼',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 118000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_5_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'ADHOC',
	    description: '23 FW 남성 컬러 데님 코치형 점퍼 (DK-GREY)',
	    name: '',
	    color: 'GREY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '점퍼',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 89910,
	    discount: 0.4,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_6_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'ADHOC',
	    description: '23 FW 남성 절개플랩 후드디테쳐블 인조가죽 점퍼 (LT-BEIGE)',
	    name: '',
	    color: 'BEIGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '점퍼',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 161910,
	    discount: 0.38,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_7_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'ADHOC',
	    description: '23 FW 남성 절개플랩 후드디테쳐블 인조가죽 점퍼 (BLACK)',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '점퍼',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 161910,
	    discount: 0.38,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_8_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'FLUKE',
	    description: '[72H POP-UP][~9/10까지]',
	    name: '플루크 블록코어 웜업 자켓 FJK107 / 4color W',
	    color: 'KHAKII',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '점퍼',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 69800,
	    discount: 0.41,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_9_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'FLUKE',
	    description: '[72H POP-UP][~9/10까지]',
	    name: '플루크 블록코어 웜업 자켓 FJK107 / 4color W',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 69800,
	    discount: 0.41,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_10_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'LACOSTE',
	    description: '남성 퀼팅 스웨트 점퍼 SH780E-53N CCA',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 329000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_10_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'LACOSTE',
	    description: '남성 POLY 트윌 해링턴 자켓 BH6242-53N CB8',
	    name: '',
	    color: 'BEIGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 379000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_12_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'THE NORTH FACE',
	    description: 'NA3NP70A 펠릭스 히트 아노락',
	    name: '',
	    color: 'GREY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 189000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_13_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'THE NORTH FACE',
	    description: 'NJ2GP73B 칸테가 고어텍스 자켓',
	    name: '',
	    color: 'YELLOW',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 659000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_13_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'THE NORTH FACE',
	    description: 'NJ2GP73B 칸테가 고어텍스 자켓',
	    name: '',
	    color: 'RED',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 659000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_15_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'EZIO',
	    description: 'Satin Soft Glossy Varsity Jumper',
	    name: '',
	    color: 'GREY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 259000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: true,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_16_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'HIS HAZZYS',
	    description: '[HIS]울 혼방 야상점퍼 HZJU3F802N3',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 339000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_17_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'WILD BRICKS',
	    description: 'DW HILLARY JACKET (dark green)',
	    name: '',
	    color: 'GREEN',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 258000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_18_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'WILD BRICKS',
	    description: 'DW HILLARY JACKET (navy)',
	    name: '',
	    color: 'NAVY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 258000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_19_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'BARACUTA',
	    description: '[23FW]',
	    name: 'G9 BARACUTA CLOTH_PURPLE PLUM',
	    color: 'GREY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 645000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_20_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'KAPPY DESIGN',
	    description: 'MOUNTAIN JACKET FOREST',
	    name: '',
	    color: 'GREY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 219000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_21_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'KAPPY DESIGN',
	    description: 'MOUNTAIN JACKET NAVY',
	    name: '',
	    color: 'NAVY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 219000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_22_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: '1989STANDARD',
	    description: '스탠다드 후드 바람막이(JOUJMP-0003)',
	    name: '',
	    color: 'GREY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 120000,
	    discount: 0.5,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_23_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'THE NORTH FACE',
	    description: '[09/25 예약배송]',
	    name: '유니 울 바시티 배색 점퍼 BNDJP450U',
	    color: 'BLUE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 268200,
	    discount: 0.1,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_jumper_24_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'bensherman',
	    description: '유니 레터링 항공 점퍼 BNCJP351U',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '자켓',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 151200,
	    discount: 0.1,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_1_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: 'down quilting shirt jumper_CWUAW23711BKX',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 359000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_2_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: 'down quilting shirt jumper_CWUAW23711BKX',
	    name: '',
	    color: 'BEIGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 359000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_3_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: 'down quilting shirt jumper_CWUAW23711BKX',
	    name: '',
	    color: 'ORANGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 359000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_4_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: 'down quilting shirt jumper_CWUAW23711BKX',
	    name: '',
	    color: 'ORANGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 359000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_5_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: '[아울렛 전용] fur collar down jumper_C9UAW23811BEX',
	    name: '',
	    color: 'GREY',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 429000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_6_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: '[아울렛 전용] fur collar down jumper_C9UAW23811BKX',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 429000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_7_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'CUSTOMELLOW',
	    description: '[아울렛 전용] fur collar down jumper_C9UAW23811BKX',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 249000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_8_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'MSGM',
	    description: '[MSGM] 남성 롱 다운 자켓 MGM18MROT502LB 라이트블루',
	    name: '',
	    color: 'BLUE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 928000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_9_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'MSGM',
	    description: '[MSGM] 남성 롱 다운 자켓 MGM18MROT502LM 옐로그린',
	    name: '',
	    color: 'BLUE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 928000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_10_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'MSGM',
	    description: '[MSGM] 남성 트라이앵글 로고 패디드 자켓(3340MH01PX 227510 99) 블랙',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 1599000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_11_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'MSGM',
	    description: '[MSGM] 남성 롱 다운 자켓(3340MH15 227701 23) 베이지',
	    name: '',
	    color: 'BEIGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 999000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_12_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'MSGM',
	    description: '[MSGM] 남성 롱 다운 자켓(3340MH15 227701 10) 오렌지',
	    name: '',
	    color: 'ORANGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 1,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 999000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_13_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'N°21',
	    description: '[N21] 남성 나일론 오버 후드 패딩 (N1M O081 5004 6816) 블루',
	    name: '',
	    color: 'BLUE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 1999000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_14_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'MSGM',
	    description: '[MSGM] 남성 베이직 다운 자켓(3340MH16 227701 10) 오렌지',
	    name: '',
	    color: 'ORANGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 899000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_15_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'MSGM',
	    description: '[MSGM] 남성 다운 베스트(3340MH17 227701 10) 오렌지',
	    name: '',
	    color: 'ORANGE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 699000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_16_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'MSGM',
	    description: '[N21] 남성 스페셜 베이직 패딩자켓 (O051 5050 5535) 그린',
	    name: '',
	    color: 'GREEN',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 750000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_17_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'MSGM',
	    description: '[N21] 남성 스페셜 베이직 패딩자켓 (O051 5050 5535) 그린',
	    name: '',
	    color: 'GREEN',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 750000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_18_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'MSGM',
	    description: '[N21] 남성 스페셜 베이직 패딩자켓 (O051 5050 6807) 블루',
	    name: '',
	    color: 'BLUE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 750000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_19_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'N°21',
	    description: '[N21] 남성 스페셜 베이직 패딩자켓 (O051 5050 2137) 카키',
	    name: '',
	    color: 'KHAKII',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 1999000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_20_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'N°21',
	    description: '[N21] 남성 나일론 오버 후드 패딩 (N1M O081 5004 9000) 블랙',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 1999000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_21_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'LACOSTE',
	    description: '남성 PQ 다운 베스트 BH668E-53N 166',
	    name: '',
	    color: 'BLUE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 389000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_22_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'LACOSTE',
	    description: '남성 PQ 다운 베스트 BH668E-53N 031',
	    name: '',
	    color: 'BLACK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 389000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: false,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_23_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'LACOSTE',
	    description: '남성 PQ 다운 베스트 BH668E-53N 166',
	    name: '',
	    color: 'BLUE',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 319000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
	    photo: ['outer_padding_24_thumbnail.png'],
	    details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
	    brand: 'THE NORTH FACE',
	    description: 'NJ2DP63E 얼티메이트 다운 자켓',
	    name: '',
	    color: 'PINK',
	    size: '라지',
	    material: '소재',
	    country: '원산지',
	    category: '패딩',

	    field: 2,
	    star: 4.5,
	    quantity: 500,
	    review: 500,
	    price: 499000,
	    discount: 0,

	    //@ label
	    // 뉴시즌
	    newSeason: true,
	    // 셀럽착용
	    celebrity: false,
	    // 쿠폰
	    coupon: false,
	    // 단독 판매
	    only: false,

	    a: '',
	    main: '',
	    c: '',
	},
	{
		photo: ['outer_coat_1_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'CUSTOMELLOW',
		description: 'padded balmacaan coat_CWCAA23504BKX',
		name: '',
		color: 'BLACK',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 549000,
		discount: 0,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_2_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'RUGGED HOUSE',
		description: '미니멀 코튼 오버핏 하프 코트 베이지',
		name: '',
		color: 'BEIGE',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 120000,
		discount: 0,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_3_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'RUGGED HOUSE',
		description: '미니멀 코튼 오버핏 하프 코트 카키',
		name: '',
		color: 'KHAKII',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 120000,
		discount: 0,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_4_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'RUGGED HOUSE',
		description: '미니멀 코튼 오버핏 하프 코트 블랙',
		name: '',
		color: 'BLACK',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 120000,
		discount: 0,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_5_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'RUGGED HOUSE',
		description: 'HANDMADE OVERSIZED CASHMERE BLENDED COAT GRAY',
		name: '',
		color: 'GREY',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 618000,
		discount: 0,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_6_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'NOHANT',
		description: 'HANDMADE OVERSIZED CASHMERE BLENDED COAT BROWN',
		name: '',
		color: 'BROWN',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 618000,
		discount: 0,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_7_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'Lord John Grey',
		description: '[23FW] | [09/25 예약배송]',
		name: 'wool fishtail coat brown',
		color: 'BROWN',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 349050,
		discount: 0.13,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_8_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'Lord John Grey',
		description: '[23FW] | [09/25 예약배송]',
		name: 'wool fishtail coat navy',
		color: 'NAVY',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 349050,
		discount: 0.13,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_9_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'Lord John Grey',
		description: '[23FW]',
		name: 'button up collar pea coat khaki',
		color: 'BEIGE',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 301550,
		discount: 0.14,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: true,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_10_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'Lord John Grey',
		description: '[23FW]',
		name: 'button up collar pea coat olive',
		color: 'OLIVE',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 301550,
		discount: 0.14,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: true,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_11_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'Lord John Grey',
		description: '[23FW]',
		name: 'button up collar pea coat black',
		color: 'BLACKS',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 301550,
		discount: 0.14,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: true,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_12_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'Lord John Grey',
		description: '[23FW]',
		name: 'wool blend high neck coat brown',
		color: 'BROWN',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 247095,
		discount: 0.15,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: true,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_13_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'Lord John Grey',
		description: '[23FW]',
		name: 'wool blend high neck coat black',
		color: 'BLACK',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 247095,
		discount: 0.15,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: true,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_14_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'Lord John Grey',
		description: '[한정 특가]',
		name: '[단독] 울 더플 코트 베이지',
		color: 'BEIGE',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 296100,
		discount: 0.1,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_15_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'Lord John Grey',
		description: '[한정 특가]',
		name: '[단독] 울 더플 코트 차콜',
		color: 'GREY',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 296100,
		discount: 0.1,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_16_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'COVERNAT',
		description: '[한정 특가]',
		name: '[단독] 울 더플 코트 네이비',
		color: 'NAVY',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 296100,
		discount: 0.1,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_17_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'malen',
		description: 'unisex mac coat denim',
		name: '',
		color: 'BLACK',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 238000,
		discount: 0,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_18_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'malen',
		description: 'unisex mac coat khaki',
		name: '',
		color: 'KHAKII',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 238000,
		discount: 0,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_19_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'malen',
		description: 'unisex mac coat black',
		name: '',
		color: 'BLACK',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 238000,
		discount: 0,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
	{
		photo: ['outer_coat_20_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'VALOREN',
		description: 'Wool Cashmere Blend Noble Coat',
		name: '',
		color: 'GREY',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 1150000,
		discount: 0,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
	    c: '',
	},
	{
		photo: ['outer_coat_21_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'VALOREN',
		description: 'Wool Cashmere Blend Pea Coat',
		name: '',
		color: 'NAVY',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 1050000,
		discount: 0,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
	    c: '',
	},
	{
		photo: ['outer_coat_22_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'VALOREN',
		description: 'Crack Suede Coat',
		name: '',
		color: 'GREY',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 780000,
		discount: 0,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
	    c: '',
	},
	{
		photo: ['outer_coat_23_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'VALOREN',
		description: 'Single Zipper Technical Coat',
		name: '',
		color: 'GREY',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 1150000,
		discount: 0,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
	    c: '',
	},
	{
		photo: ['outer_coat_24_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MUDSALT',
		description: 'WASHED NYLON HOODED COAT NAVY',
		name: '',
		color: 'NAVY',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '코트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 193800,
		discount: 0.15,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
	    c: '',
	},
	{
		photo: ['pants_1_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MOO 7.2.5',
		description: '[단독세일]',
		name: '페티그 코튼 팬츠_2C3S',
		color: 'BEIGE',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 56100,
		discount: 0.15,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
	    c: '',
	},
	{
		photo: ['pants_2_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'ADHOC',
		description: '23 FW 남성 카고 와이드 팬츠 (BLACK)',
		name: '',
		color: 'BLACK',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 80910,
		discount: 0.38,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
	    c: '',
	},
	{
		photo: ['pants_3_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'ADHOC',
		description: '23 FW 남성 카고 와이드 팬츠 (DK-GREY)',
		name: '',
		color: 'GREY',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 80910,
		discount: 0.38,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
	    c: '',
	},
	{
		photo: ['pants_4_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'ADHOC',
		description: '23 FW 남성 가을 TR 사이드밴딩 원턱와이드 팬츠 (DK-BEIGE)',
		name: '',
		color: 'BEIGE',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 80910,
		discount: 0.38,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
	    c: '',
	},
	{
		photo: ['pants_5_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'KAPPY DESIGN',
		description: 'HEAVY COTTON FATIGUE PANTS CREAM',
		name: '',
		color: 'BEIGE',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 123000,
		discount: 0,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
	    c: '',
	},
	{
		photo: ['pants_6_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'KAPPY DESIGN',
		description: 'RIPSTOP CARGO PANTS NAVY',
		name: '',
		color: 'BLACK',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 129000,
		discount: 0,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
	    c: '',
	},
	{
		photo: ['pants_7_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'EDDIE BAUER',
		description: '에디바우어 23FALL 코튼 파워 스트레치 조거팬츠 3종 남성용',
		name: '',
		color: 'BLACK',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 78300,
		discount: 0.1,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
	    c: '',
	},
	{
		photo: ['pants_8_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MAGOODGAN',
		description: '[한정특가]',
		name: '파번 4605 빅카고 립스탑 카모 팬츠',
		color: 'BLACK',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 81700,
		discount: 0.05,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
	    c: '',
	},
	{
		photo: ['pants_9_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MIND BRIDGE',
		description: '[한정특가]',
		name: '[웜]테이퍼드조직변형밴딩슬랙스 MXPT7121',
		color: 'BLACK',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 71910,
		discount: 0.1,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
	    c: '',
	},
	{
		photo: ['pants_10_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MIND BRIDGE',
		description: '[한정특가]',
		name: '릴랙스핏원턱풀밴딩팬츠 MXPT7113',
		color: 'BLACK',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 71910,
		discount: 0.1,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
	    c: '',
	},
	{
		photo: ['pants_11_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'KAPPY DESIGN',
		description: '[09/19 예약배송]',
		name: 'RIPSTOP CARGO PANTS KHAKI',
		color: 'KHAKII',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 129000,
		discount: 0.1,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
	    c: '',
	},
	{
		photo: ['pants_12_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'KAPPY DESIGN',
		description: '[09/19 예약배송]',
		name: 'RIPSTOP CARGO PANTS BEIGE',
		color: 'BEIGE',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 129000,
		discount: 0.1,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
	    c: '',
	},
	{
		photo: ['pants_13_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'alvinclo',
		description: '[DE LUXE] 앨빈클로 FELICITY 밴딩 조거팬츠 DLX4508 (4 COLOR)',
		name: '',
		color: 'BEIGE',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 29900,
		discount: 0.4,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: 'true',
	    c: '',
	},
	{
		photo: ['pants_14_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'COVERNAT',
		description: '플리스 조거 팬츠 네이비',
		name: '',
		color: 'NAVY',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 80910,
		discount: 0.38,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: 'true',
	    c: '',
	},
	{
		photo: ['pants_15_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MAGOODGAN',
		description: '파번 4605 빅카고 립스탑 다크그레이 팬츠',
		name: '',
		color: 'GREY',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 81700,
		discount: 0.05,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: 'true',
	    c: '',
	},
	{
		photo: ['pants_16_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MAGOODGAN',
		description: '파번 4404 코튼 카펜터 브라운 팬츠',
		name: '',
		color: 'BROWN',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 81700,
		discount: 0.05,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: 'true',
	    c: '',
	},
	{
		photo: ['pants_17_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MAGOODGAN',
		description: '파번 4404 코튼 카펜터 다크그레이 팬츠',
		name: '',
		color: 'GREY',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,
		price: 81700,
		discount: 0.05,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: 'true',
	    c: '',
	},
	{
		photo: ['pants_18_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MIND BRIDGE',
		description: '두굿_[웜]세미와이드밴딩슬랙스 MXPT7103',
		name: '',
		color: 'KHAKII',
		price: 71910,
		discount: 0.1,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: 'true',
	    c: '',
	},
	{
		photo: ['pants_19_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'COVERNAT',
		description: '플리스 조거 팬츠 멜란지 그레이',
		name: '',
		price: 80910,
		color: 'GREY',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: 'true',
	    c: '',
	},
	{
		photo: ['pants_20_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'KAPPY DESIGN',
		description: 'HEAVY COTTON FATIGUE PANTS CHARCOAL',
		name: '',
		price: 123000,
		color: 'BLACK',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: 'true',
	    c: '',
	},
	{
		photo: ['pants_21_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MAYOL',
		description: '포켓 카고팬츠_카키',
		name: '',
		price: 129000,
		color: 'KHAKII',
		discount: 0.07,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: 'true',
	    c: '',
	},
	{
		photo: ['pants_22_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MAYOL',
		description: '포켓 카고팬츠_레오파드',
		name: '',
		price: 129000,
		color: 'BLACK',
		discount: 0.07,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: 'true',
	    c: '',
	},
	{
		photo: ['pants_23_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MAYOL',
		description: '[09/15 예약배송]',
		name: '남성 yuppie 니트 팬츠_블랙',
		price: 129000,
		color: 'BLACK',
		discount: 0.07,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: 'true',
	    c: '',
	},
	{
		photo: ['pants_24_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MOO 7.2.5',
		description: '[단독세일]',
		name: '절개 스웻 조거 팬츠_3C2S',
		price: 56100,
		color: 'GREY',
		discount: 0.15,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '팬츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: 'true',
	    c: '',
	},
	{
		photo: ['tshirt_1_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'H&M',
		description: '오버사이즈핏 코튼 티셔츠 블랙/Harlem 1088084007',
		name: '',
		price: 29900,
		color: 'BLACK',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_2_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'H&M',
		description: '릴랙스핏 후드티 다크 브라운 0970819064',
		name: '',
		price: 24900,
		color: 'BROWN',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_3_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'H&M',
		description: '오버사이즈핏 코튼 티셔츠 화이트/Worldwide 1088084008',
		name: '',
		price: 29900,
		color: 'WHITE',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_4_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'H&M',
		description: '릴랙스핏 스웨트셔츠 라이트 베이지 1106760003',
		name: '',
		price: 34900,
		color: 'BEIGE',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_5_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'H&M',
		description: '오버사이즈핏 티셔츠 화이트/엑스맨 1159823019',
		name: '',
		price: 29900,
		color: 'WHITE',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_6_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'H&M',
		description: '릴랙스핏 지퍼 디테일 스웨트셔츠 그레이 멜란지/스누피 1117752005',
		name: '',
		price: 49900,
		color: 'GREY',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_7_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MAGOODGAN',
		description: '[한정특가] | [09/14 예약배송]',
		name: '스웩버 3559 스트라이프 오렌지 긴팔티셔츠',
		price: 41600,
		color: 'ORANGE',
		discount: 0.2,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_8_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MAGOODGAN',
		description: '[한정특가] | [09/14 예약배송]',
		name: '스웩버 3559 스트라이프 바이올렛 긴팔티셔츠',
		price: 41600,
		color: 'RED',
		discount: 0.2,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_9_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MAGOODGAN',
		description: '[한정특가] | [09/14 예약배송]',
		name: '스웩버 3559 스트라이프 그레이 긴팔티셔츠',
		price: 41600,
		color: 'GREY',
		discount: 0.2,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_10_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MAGOODGAN',
		description: '[한정특가] | [09/14 예약배송]',
		name: '아카릿 3318 패치워크 그레이 스웨트셔츠',
		price: 57600,
		color: 'GREY',
		discount: 0.2,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_11_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MAGOODGAN',
		description: '[한정특가] | [09/14 예약배송]',
		name: '아카릿 3318 패치워크 스카이블루 스웨트셔츠',
		price: 57600,
		color: 'BLUE',
		discount: 0.2,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_12_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MAGOODGAN',
		description: '[한정특가] | [09/14 예약배송]',
		name: '아카릿 3319 전판프린트 오프화이트 스웨트셔츠',
		price: 57600,
		color: 'GREY',
		discount: 0.2,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_13_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MAGOODGAN',
		description: '[한정특가] | [09/14 예약배송]',
		name: '아카릿 3319 전판프린트 다크그레이 스웨트셔츠',
		price: 57600,
		color: 'GREY',
		discount: 0.2,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_14_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MAGOODGAN',
		description: '[한정특가] | [09/14 예약배송]',
		name: '아카릿 3320 브이넥 다크그레이 스웨트셔츠',
		price: 54400,
		color: 'GREY',
		discount: 0.2,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_15_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MAGOODGAN',
		description: '[한정특가] | [09/14 예약배송]',
		name: '아카릿 3320 브이넥 스톤 스웨트셔츠',
		price: 54400,
		color: 'BEIGE',
		discount: 0.2,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_16_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'MAGOODGAN',
		description: '[한정특가] | [09/14 예약배송]',
		name: '아카릿 3320 브이넥 그레이시블루 스웨트셔츠',
		price: 54400,
		color: 'BLUE',
		discount: 0.2,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_17_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'Marithe Francois Girbaud',
		description: 'MOUVEMENT CLASSIC LOGO HALF ZIPUP SWEATSHIRT ivory',
		name: '',
		price: 109000,
		color: 'BLUE',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_18_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'H&M',
		description: '릴랙스핏 지퍼 디테일 스웨트셔츠 다크 블루/키스 해링 1117752004',
		name: '',
		price: 49900,
		color: 'BLUE',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_19_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'FLUKE',
		description: '[72H POP-UP][~9/10까지]',
		name: '플루크 월드트래블 타이거 피그먼트 후드 티셔츠 FHT709 / 4color',
		price: 57800,
		color: 'BLUE',
		discount: 0.35,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_20_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'FLUKE',
		description: '[72H POP-UP][~9/10까지]',
		name: '플루크 월드트래블 타이거 피그먼트 후드 티셔츠 FHT709 / 4color W',
		price: 57800,
		color: 'GREY',
		discount: 0.35,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_21_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'TWN',
		description: '이너선스 후드 블랙 JYHD3530',
		name: '',
		price: 38900,
		color: 'BLACK',
		discount: 0.32,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: true,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_22_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'TWN',
		description: '이너선스 후드 와인 JYHD3530',
		name: '',
		price: 38900,
		color: 'RED',
		discount: 0.32,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: true,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_23_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'TWN',
		description: '플라이도그 후드 아이보리 HSHD3526',
		name: '',
		price: 38900,
		color: 'RED',
		discount: 0.32,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: true,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['tshirt_24_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'TWN',
		description: '플라이도그 후드 와인 HSHD3526',
		name: '',
		price: 38900,
		color: 'RED',
		discount: 0.32,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '티셔츠',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: true,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_1_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'murray allan',
		description: 'V-neck Color Block Pullover_Melange Grey',
		name: '',
		price: 378000,
		color: 'GREY',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_2_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'murray allan',
		description: 'V-neck Color Block Pullover_Skin Beige',
		name: '',
		price: 378000,
		color: 'BEIGE',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_3_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'murray allan',
		description: 'Double layer Rib Cardigan_Stone',
		name: '',
		price: 478000,
		color: 'GREY',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_4_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'murray allan',
		description: 'Double layer Rib Cardigan_Camel',
		name: '',
		price: 478000,
		color: 'ORANGE',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_5_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'murray allan',
		description: 'A Logo shirts Pullover_Black',
		name: '',
		price: 368000,
		color: 'BLACK',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_6_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'murray allan',
		description: 'A Logo shirts Pullover_Skin Beige',
		name: '',
		price: 368000,
		color: 'RED',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_7_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'murray allan',
		description: 'A Logo shirts Pullover_Skin Beige',
		name: '',
		price: 378000,
		color: 'BEIGE',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_8_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'murray allan',
		description: 'A Logo Crewneck Pullover_Black',
		name: '',
		price: 378000,
		color: 'BLACK',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_9_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'murray allan',
		description: 'A Logo Crewneck Pullover_Shadow',
		name: '',
		price: 378000,
		color: 'GREY',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_10_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'murray allan',
		description: 'A Logo Crewneck Pullover_Skin Beige',
		name: '',
		price: 378000,
		color: 'BEIGE',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_11_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'murray allan',
		description: 'Smart fit Cardigan_Grass Green',
		name: '',
		price: 438000,
		color: 'GREEN',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_12_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'THE KNIT COMPANY',
		description: '알파카 블렌드 럭비 니트 3color',
		name: '',
		price: 99000,
		color: 'BROWN',
		discount: 0.1,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 1,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_13_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'THE KNIT COMPANY',
		description: '알파카 블렌드 럭비 니트 3color',
		name: '',
		price: 99000,
		color: 'BROWN',
		discount: 0.1,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_14_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'THE KNIT COMPANY',
		description: '마일드 코튼 케이블 니트 4color',
		name: '',
		price: 111000,
		color: 'PINK',
		discount: 0.1,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_15_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'THE KNIT COMPANY',
		description: '마일드 코튼 리브드 니트 8color',
		name: '',
		price: 95900,
		color: 'GREEN',
		discount: 0.1,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_16_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'THE KNIT COMPANY',
		description: '에어울 베이직 니트 8color',
		name: '',
		price: 60500,
		color: 'BEIGE',
		discount: 0.1,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_17_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'THE KNIT COMPANY',
		description: '소프트 알파카 카라 가디건 3color',
		name: '',
		price: 110000,
		color: 'YELLOW',
		discount: 0.1,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_18_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'THE KNIT COMPANY',
		description: '알파카 블렌드 라운드 가디건 3color',
		name: '',
		price: 110000,
		color: 'GREY',
		discount: 0.1,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_19_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'murray allan',
		description: 'V-neck Color Block Pullover_Melange Grey',
		name: '',
		price: 378000,
		color: 'GREY',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: true,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_20_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'THE KNIT COMPANY',
		description: '에어울 베이직 가디건 3color',
		name: '',
		price: 89800,
		color: 'GREY',
		discount: 0.1,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: true,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_21_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'murray allan',
		description: '[10/10 예약배송]',
		name: 'DYING WASHED KNIT HOODIE / DARK BROWN',
		price: 98000,
		color: 'GREY',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: true,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_22_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'RSC',
		description: 'CURVY STITCHED CREW NECK KNIT - BLACK',
		name: '',
		price: 85000,
		color: 'BLACK',
		discount: 0,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_23_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'BASEMOMENT',
		description: '벌키 브러쉬 크루넥 니트 라이트 그레이',
		name: '',
		price: 66600,
		color: 'GREY',
		discount: 0.1,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
    {
		photo: ['neat_24_thumbnail.png'],
		details: ['outer_details_1_1.png', 'outer_details_2_1.png'],
		brand: 'BASEMOMENT',
		description: '벌키 브러쉬 크루넥 니트 차콜',
		name: '',
		price: 66600,
		color: 'GREY',
		discount: 0.1,
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '니트',

		field: 2,
		star: 4.5,
		quantity: 500,
		review: 500,

		//@ label
		// 뉴시즌
		newSeason: false,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		main: '',
		c: '',
	},
];
