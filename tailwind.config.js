/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.jsx'],
	theme: {
		screens: {
			// 반응형 스크린 사이즈
			mobile: {min: '320px', max: '767px'},
			tablet: {min: '768px', max: '1279px'},
			desktop: {min:'1279px', max: '1920px'},
			contents: {min:'1279px', max: '1920px'},
		},
    
		extend: {
			colors: {
        // 임의로 설정해놓은 값. 수정 (지영)
				transparent: 'transparent',
				primary: '#000',
				secondary: '#777',
        tertiary: '#fa5500',
        'grey-900': '#171717',
        'grey-800': '#313131',
        'grey-700': '#484848',
        'grey-600': '#616161',
        'grey-500': '#7A7A7A',
        'grey-400': '#959595',
        'grey-300': '#AAAAAA',
        'grey-200': '#CCCCCC',
        'grey-100': '#E9E9E9',
			},
      fontSize: {
        xs: ['0.688rem'], // 11px
        sm: ['0.75rem'], // 12px
        base: ['0.875rem'], // 14px
        lg: ['1rem'], // 16px
        mlg: ['1.125rem'], // 18px
        xl: ['1.375rem'], // 22x
        '2xl': ['1.625rem'], // 26px
        '3xl': ['2.25rem'], // 36px
        '4xl': ['3rem'], //48px
      },
      borderRadius: {
        none: '0',
        xs: '0.0625rem',
        sm: '0.25rem',
        default: '0.3125rem',
        lg: '0.625rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.0625rem',
      },
			backgroundImage: {
        'sprite01': "url('https://static.wconcept.co.kr/web/images/common/spr-common.png')",
        'sprite02': "url('https://static.wconcept.co.kr/web/images/common/spr-product.png')",
      },
      backgroundPosition: {

      },
      fontFamily: {
       pretendard: 'Pretendard'
      }
		},
	},
	plugins: [],
};
