import {useNavigate} from 'react-router-dom';
import pb from '@/api/pocketbase';
import debounce from '@/utils/debounce';
import {JoinInput} from '@/components/join/JoinInput';
import {JoinButton} from '@/components/join/JoinButton';
import {Helmet} from 'react-helmet-async';
import toast from 'react-hot-toast';
import useInputIncorrectCheck from '@/hooks/useInputIncorrectCheck';
import {useEffect, useState} from 'react';

function Join() {
	const navigate = useNavigate();

	const [formState, setFormState] = useState({
		name: '',
		username: '',
		email: '',
		password: '',
		passwordConfirm: '',
	});

	const {usernameIncorrectMessage, emailIncorrectMessage, passwordIncorrectMessage, passwordconfirmIncorrectMessage, checkInput} = useInputIncorrectCheck();

	const handleRegister = async (e) => {
		e.preventDefault();

		const {name, username, email, password, passwordConfirm} = formState;
		if (name == '') {
			toast.error(`이름을 입력하세요.`, {
				style: {
					padding: '6px 14px',
					lineHeight: '22px',
				},
			});
			return;
		}
		if (username == '') {
			toast.error(`닉네임을 입력하세요.`, {
				style: {
					padding: '6px 14px',
					lineHeight: '22px',
				},
			});
			return;
		}
		if (email == '') {
			toast.error(`이메일을 입력하세요.`, {
				style: {
					padding: '6px 14px',
					lineHeight: '22px',
				},
			});
			return;
		}
		if (password == '') {
			toast.error(`비밀번호를 입력하세요.`, {
				style: {
					padding: '6px 14px',
					lineHeight: '22px',
				},
			});
			return;
		}

		if (/[^\x00-\x7F]/.test(username)) {
			toast.error(`닉네임을 영문으로 입력해주세요.`, {
				style: {
					padding: '6px 14px',
					lineHeight: '22px',
				},
			});
			return;
		}
		if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/.test(password)) {
			toast.error(
				`영문+숫자+특수문자 조합 
			8~16자리로 입력해주세요.`,
				{
					style: {
						padding: '6px 14px',
						lineHeight: '22px',
					},
				},
			);
			return;
		}
		if (password !== passwordConfirm) {
			toast.error(
				`비밀번호가 일치하지 않습니다. 
			다시 확인해보세요.`,
				{
					style: {
						padding: '6px 14px',
						lineHeight: '22px',
					},
				},
			);
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			toast.error(
				`유효한 이메일 주소가 아닙니다. 
			다시 확인해보세요.`,
				{
					style: {
						padding: '6px 14px',
						lineHeight: '22px',
					},
				},
			);
			return;
		}

		if (!isAgeChecked) {
			toast.error(
				`필수항목 
			만 14세 이상일 경우 동의하여 주십시오.`,
				{
					style: {
						padding: '6px 14px',
						lineHeight: '22px',
					},
				},
			);
			return;
		}

		if (!isAgreementChecked) {
			toast.error(
				`필수항목 
			사이트 이용 약관에 동의하여 주십시오.`,
				{
					style: {
						padding: '6px 14px',
						lineHeight: '22px',
					},
				},
			);
			return;
		}

		if (!isInfoChecked) {
			toast.error(
				`필수항목 
			개인정보 수집·이용에 동의해 주십시오.`,
				{
					style: {
						padding: '6px 14px',
						lineHeight: '22px',
					},
				},
			);
			return;
		}

		// PocketBase SDK 인증 요청
		await pb.collection('users').create({
			...formState,
			emailVisibility: true,
		});

		navigate('/');
	};

	const handleInput = (e) => {
		const {name, value} = e.target;
		checkInput(name, value);
		//함수로 만들어서 매개변수 넣어서 재활용
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleDebounceInput = debounce(handleInput, 200);

	//이벤트 정보 토글버튼
	const [isEventChecked, setEventIsChecked] = useState(false);

	//전체동의합니다 체크박스 토글
	const [isAllChecked, setAllIsChecked] = useState(false);
	const handleAllCheckboxChange = () => {
		let newValue = !isAllChecked;

		setAllIsChecked(newValue);
		setAgeIsChecked(newValue);
		setAgreementIsChecked(newValue);
		setInfoIsChecked(newValue);
		setInfoUseIsChecked(newValue);
	};

	//만 14세 이상입니다 체크박스 토글
	const [isAgeChecked, setAgeIsChecked] = useState(false);

	//이용약관 동의 체크박스 토글
	const [isAgreementChecked, setAgreementIsChecked] = useState(false);

	//개인정보 수집 및 이용에 대한 동의 체크박스 토글
	const [isInfoChecked, setInfoIsChecked] = useState(false);

	//개인정보 수집 및 이용안내 체크박스 토글
	const [isInfoUseChecked, setInfoUseIsChecked] = useState(false);

	// 전체 토글 제외 다른 토글들이 모두 체크된 상태일 때, 전체 토글 체크됨
	// 토글들이 모두 체크된 상태일 때 전체 토글 제외 토글이 1개이상 해제되면 전체 토글 체크 해제됨
	useEffect(() => {
		if (isAgeChecked && isAgreementChecked && isInfoChecked && isInfoUseChecked) {
			setAllIsChecked(true);
		} else if (!isAgeChecked || !isAgreementChecked || !isInfoChecked || !isInfoUseChecked) {
			setAllIsChecked(false);
		}
	}, [isAgeChecked, isAgreementChecked, isInfoChecked, isInfoUseChecked]);

	//나머지 토글 체크박스 핸들러
	const handleCheckboxChange = (setFunc) => () => {
		setFunc((prevState) => !prevState);
	};

	return (
		<>
			<Helmet>
				<title>Join | M CONCEPT</title>
			</Helmet>
			<section className="join_container">
				<h2 className="subTitle relative min-w-[1240px] pb-[36px] pt-[55px] text-center text-[44px] uppercase">join member</h2>
				<div className="member_join mx-[auto] mb-[140px] w-[1240px]">
					<div className="table_notice mb-[3px] mt-[-26px] text-right align-middle text-[12px] text-[#666]">
						<span className="pt-[2px] text-[#ff1414]">*</span>
						<span>필수 입력 항목</span>
					</div>
					<form onSubmit={handleRegister}>
						<table summary="회원가입 정보 기입 표" className="mb-[60px] w-[100%] table-fixed border-separate border-spacing-0 border-b-[1px] border-t-[2px] border-solid border-[#171717]">
							<caption className="sr-only">회원가입 양식</caption>
							<colgroup className="table-column-group">
								<col className="w-[295px]" />
								<col />
							</colgroup>
							<tbody className="table-row-group align-middle ">
								<tr>
									<th className="sr-only hidden">배너 th</th>
									<td colSpan="2" className="p-[0]">
										<div className="table h-[48px] w-[100%] bg-[#ff6160] text-center text-[#fff]">
											<strong className="table-cell align-middle text-[20px]">
												회원으로 가입하시면 즉시 사용가능한
												<span>10%</span>
												할인쿠폰을 드립니다.<em className="font-[bolder] text-[14px] not-italic"> (본인인증 완료한 계정당 1회 사용 가능)</em>
											</strong>
										</div>
									</td>
								</tr>
								<JoinInput maxLength="10" type="text" label="이름" name="name" defaultValue={formState.name} placeholder="ex) 홍길동" onChange={handleDebounceInput} />
								<JoinInput
									maxLength="20"
									type="text"
									label="닉네임"
									name="username"
									defaultValue={formState.username}
									placeholder="영문으로 입력해주세요."
									onChange={handleDebounceInput}
									incorrectMessage={usernameIncorrectMessage}
								/>
								<JoinInput
									maxLength="50"
									type="email"
									label="이메일 아이디"
									name="email"
									placeholder="@까지 정확하게 입력해주세요."
									defaultValue={formState.email}
									onChange={handleDebounceInput}
									incorrectMessage={emailIncorrectMessage}
								/>
								<JoinInput
									type="password"
									label="비밀번호"
									name="password"
									maxLength="16"
									placeholder="영문+숫자+특수문자 조합 8~16자리"
									defaultValue={formState.password}
									incorrectMessage={passwordIncorrectMessage}
									onChange={handleDebounceInput}
								/>
								<JoinInput
									type="password"
									label="비밀번호 확인"
									name="passwordConfirm"
									maxLength="16"
									defaultValue={formState.passwordConfirm}
									incorrectMessage={passwordconfirmIncorrectMessage}
									onChange={handleDebounceInput}
								/>
								<tr>
									<th className="h-[68px] border-t-[1px] border-[#d9d9d9] pl-[43px] text-left text-[#333]">
										이벤트 정보<span className="pt-[2px] text-[#ff1414]">*</span>
									</th>
									<td className="break-words border-t-[1px] border-solid border-[#d9d9d9] bg-clip-padding px-[19px] py-[14px] text-[14px] text-[#000]">
										<div className="input_button agree-all_box relative mr-[50px] inline-block">
											<input
												checked={isEventChecked}
												onChange={handleCheckboxChange(setEventIsChecked)}
												className="absolute left-0 top-0 z-[1] h-[25px] w-[25px] opacity-0"
												type="checkbox"
												id="agree-all"
												name="test"
											/>
											<label
												htmlFor="agree-all"
												className={`
											
											  before:-content[''] relative block pl-[35px] text-[14px] leading-[25px] before:absolute before:left-[0] before:top-[0] before:block before:h-[25px] before:w-[25px] before:bg-[url('../../public/common/sprīt_2.png')] 
												${isEventChecked ? 'before:bg-[left_-30px_top_-30px]' : 'before:bg-[left_0px_top_-30px]	'}`}
											>
												수신
											</label>
										</div>
										<div className="input_button disagree-all_box relative mr-[50px] inline-block">
											<input
												checked={isEventChecked}
												onChange={handleCheckboxChange(setEventIsChecked)}
												className="absolute left-0 top-0 z-[1] h-[25px] w-[25px] opacity-0"
												type="checkbox"
												id="disagree-all"
												name="test"
											/>
											<label
												htmlFor="disagree-all"
												className={`${
													isEventChecked ? 'before:bg-[left_0px_top_-30px]	' : 'before:bg-[left_-30px_top_-30px]'
												}  before:-content[''] relative block pl-[35px] text-[14px] leading-[25px] before:absolute before:left-[0] before:top-[0] before:block before:h-[25px] before:w-[25px] before:bg-[url('../../public/common/sprīt_2.png')]`}
											>
												비수신
											</label>
										</div>
									</td>
								</tr>
							</tbody>
						</table>

						<section className="join_agreement mb-[60px]">
							<div className="all_check_desc relative m-0 inline-block pb-[20px] pl-[40px] pt-[0]">
								<input
									checked={isAllChecked}
									onChange={handleAllCheckboxChange}
									className="absolute left-0 top-[0] z-[1] h-[25px] w-[25px] opacity-0"
									type="checkbox"
									name="checkAll2"
									id="checkAll2"
								/>
								<label
									htmlFor="checkAll2"
									className={`${
										isAllChecked ? 'before:bg-[left_-30px_top_0px]' : ''
									} before:-content[''] relative mt-[5px] block pl-[35px] text-[14px] leading-[25px] text-[#666] before:absolute before:left-[0] before:top-[0] before:block before:h-[25px] before:w-[25px] before:bg-[url('../../public/common/sprīt_2.png')]`}
								>
									<em className="text-[16px] not-italic	">전체동의합니다.</em>
									<br />
									전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며, 개별적으로도 동의를 선택하실 수 있습니다.
									<br />
									선택항목에 대한 동의를 거부하는 경우에도 회원가입 서비스는 이용 가능합니다.
								</label>
							</div>
							<ul>
								<li className="relative mb-[1px] h-[50px] bg-[#f2f2f2] pl-[40px] pt-[13px]">
									<div className="input_button relative mr-[50px] inline-block">
										<input
											checked={isAgeChecked}
											onChange={handleCheckboxChange(setAgeIsChecked)}
											className="absolute left-0 top-0 z-[1] h-[25px] w-[25px] opacity-0"
											type="checkbox"
											name="all_agree04"
											id="checkAgree5"
										/>
										<label
											htmlFor="checkAgree5"
											className={` before:-content[''] relative block pl-[35px] text-[14px] leading-[25px] text-[#333] before:absolute before:left-[0] before:top-[0] before:block before:h-[25px] before:w-[25px] before:bg-[url('../../public/common/sprīt_2.png')] ${
												isAgeChecked ? 'before:bg-[left_-30px_top_0px]' : ''
											}`}
										>
											만 14세 이상입니다. (필수)
										</label>
									</div>
								</li>
								<li className="relative mb-[1px] h-[50px] bg-[#f2f2f2] pl-[40px] pt-[13px]">
									<div className="input_button relative mr-[50px] inline-block">
										<input
											checked={isAgreementChecked}
											onChange={handleCheckboxChange(setAgreementIsChecked)}
											className="absolute left-0 top-0 z-[1] h-[25px] w-[25px] opacity-0"
											type="checkbox"
											name="all_agree04"
											id="checkAgree4"
										/>
										<label
											htmlFor="checkAgree4"
											className={` before:-content[''] relative block pl-[35px] text-[14px] leading-[25px] text-[#333] before:absolute before:left-[0] before:top-[0] before:block before:h-[25px] before:w-[25px] before:bg-[url('../../public/common/sprīt_2.png')] 
											 ${isAgreementChecked ? 'before:bg-[left_-30px_top_0px]' : ''} `}
										>
											이용약관 동의 (필수)
										</label>
									</div>
									<button
										onClick={() => {
											window.location.href = 'https://www.wconcept.co.kr/CustomerAgreement';
										}}
										type="button"
										className="open-layer absolute right-[40px] top-[14px] inline-block h-[20px] min-w-[60px] border-[1px] border-solid border-[#333] bg-[#fff] px-[8px] text-center align-middle text-[12px] leading-[18px]"
									>
										내용보기
									</button>
								</li>
								<li className="relative mb-[1px] h-[50px] bg-[#f2f2f2] pl-[40px] pt-[13px]">
									<div className="input_button relative mr-[50px] inline-block">
										<input
											checked={isInfoChecked}
											onChange={handleCheckboxChange(setInfoIsChecked)}
											className="absolute left-0 top-0 z-[1] h-[25px] w-[25px] opacity-0"
											type="checkbox"
											name="all_agree02"
											id="checkAgree2"
										/>
										<label
											htmlFor="checkAgree2"
											className={` before:-content[''] relative block pl-[35px] text-[14px] leading-[25px] text-[#333] before:absolute before:left-[0] before:top-[0] before:block before:h-[25px] before:w-[25px] before:bg-[url('../../public/common/sprīt_2.png')] ${
												isInfoChecked ? 'before:bg-[left_-30px_top_0px]' : ''
											} `}
										>
											개인정보 수집 및 이용에 대한 동의 (필수)
										</label>
									</div>
									<button
										onClick={() => {
											window.location.href = 'https://www.wconcept.co.kr/CustomerAgreement';
										}}
										type="button"
										className="open-layer absolute right-[40px] top-[14px] inline-block h-[20px] min-w-[60px] border-[1px] border-solid border-[#333] bg-[#fff] px-[8px] text-center align-middle text-[12px] leading-[18px]"
									>
										내용보기
									</button>
								</li>
								<li className="relative mb-[1px] h-[50px] bg-[#f2f2f2] pl-[40px] pt-[13px]">
									<div className="input_button relative mr-[50px] inline-block">
										<input
											checked={isInfoUseChecked}
											onChange={handleCheckboxChange(setInfoUseIsChecked)}
											className="absolute left-0 top-0 z-[1] h-[25px] w-[25px] opacity-0"
											type="checkbox"
											name="all_agree03"
											id="checkAgree3"
										/>
										<label
											htmlFor="checkAgree3"
											className={` before:-content[''] relative block pl-[35px] text-[14px] leading-[25px] text-[#333] before:absolute before:left-[0] before:top-[0] before:block before:h-[25px] before:w-[25px] before:bg-[url('../../public/common/sprīt_2.png')] ${
												isInfoUseChecked ? 'before:bg-[left_-30px_top_0px]' : ''
											} `}
										>
											개인정보 수집 및 이용안내 (선택)
										</label>
									</div>
									<button
										onClick={() => {
											window.location.href = 'https://www.wconcept.co.kr/CustomerAgreement';
										}}
										type="button"
										className="open-layer absolute right-[40px] top-[14px] inline-block h-[20px] min-w-[60px] border-[1px] border-solid border-[#333] bg-[#fff] px-[8px] text-center align-middle text-[12px] leading-[18px]"
									>
										내용보기
									</button>
								</li>
							</ul>
						</section>
						<div className="join_btn_wrap text-center">
							<JoinButton type="reset" style="bg-[#fff]">
								취소
							</JoinButton>
							<JoinButton type="submit" style="bg-[#000] text-[#fff]">
								확인
							</JoinButton>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}

export default Join;
