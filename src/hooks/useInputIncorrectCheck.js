import {useState} from 'react';

function useInputIncorrectCheck() {
	const [usernameIncorrectMessage, setUsernameIncorrectMessage] = useState('');
	const [emailIncorrectMessage, setEmailIncorrectMessage] = useState('');
	const [passwordIncorrectMessage, setPasswordIncorrectMessage] = useState('');
	const [passwordconfirmIncorrectMessage, setPasswordconfirmIncorrectMessage] = useState('');

	const [passwordValue, setPasswordValue] = useState('');

	const checkInput = (name, value) => {
		if (name === 'username') {
			// Check if the input contains non-English characters
			if (/[^\x00-\x7F]/.test(value)) {
				setUsernameIncorrectMessage('영문으로 입력해주세요.');
			} else {
				setUsernameIncorrectMessage('');
			}
		} else if (name === 'email') {
			if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
				setEmailIncorrectMessage('올바른 이메일 아이디를 입력해주세요.');
			} else {
				setEmailIncorrectMessage('');
			}
		} else if (name === 'password') {
			setPasswordValue(value);
			if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/.test(value)) {
				setPasswordIncorrectMessage('영문+숫자+특수문자 조합 8~16자리로 입력해주세요.');
			} else {
				setPasswordIncorrectMessage('');
			}
		} else if (name === 'passwordConfirm') {
			if (value !== passwordValue) {
				setPasswordconfirmIncorrectMessage('비밀번호가 일치하지 않습니다.');
			} else {
				setPasswordconfirmIncorrectMessage('');
			}
		}
		// else if로 여러 타입 상황만들기
	};

	return {usernameIncorrectMessage, emailIncorrectMessage, passwordIncorrectMessage, passwordconfirmIncorrectMessage, checkInput};
}

export default useInputIncorrectCheck;
