import pb from '@/api/pocketbase';
import {LoginButton} from '@/components/LoginButton';
import {LoginInput} from '@/components/LoginInput';
import {useAuth} from '@/contexts/Auth';
import debounce from '@/utils/debounce';
import {useState} from 'react';
import toast from 'react-hot-toast';
import {useLocation, useNavigate} from 'react-router-dom';

function Login() {
	const {state} = useLocation();
	const navigate = useNavigate();

	const [formState, setFormState] = useState({
		email: '',
		password: '',
	});

	const handleSignIn = async (e) => {
		e.preventDefault();

		const {email, password} = formState;
		console.log(email);
		console.log(password);
		try {
			const response = await pb.collection('users').authWithPassword(email, password);
			console.log(response);

			if (!state) {
				navigate('/');
			} else {
				// 사용자가 원하는 경로로 접속 요청
				// 로그인 유무 확인이 안되서 사용자를 로그인 페이지로 이동
				// 로그인 페이지에서 사용자가 로그인 시도 (성공)
				// 성공 (로그인 이력을 남기지 않도록 합니다.)
				// console.log(state.wishLocationPath);
				// 이슈 확인 결과: '/signin'이 나와서 이동 안한 것임!

				const {wishLocationPath} = state;
				navigate(wishLocationPath === '/signin' ? '/' : wishLocationPath);
			}
		} catch (error) {
			console.error(error);
			toast.error(`아이디 또는 비밀번호가 일치하지 않습니다. 다시 입력해주세요`, {
				style: {
					padding: '6px 14px',
					lineHeight: '22px',
				},
			});
		}
	};

	const handleInput = debounce((e) => {
		const {name, value} = e.target;
		setFormState({
			...formState,
			[name]: value,
		});
	}, 400);

	const [isChecked, setIsChecked] = useState(false);
	const handleCheckboxChange = () => {
		console.log('test');
		setIsChecked(!isChecked);
	};

	return (
		<>
			<section className="mx-[auto] w-[1240px]">
				<h1 className=" mb-[42px] mt-[60px] text-center text-[41px]">LOGIN</h1>
				<h2 className="sr-only">로그인 정보 입력</h2>
				<form onSubmit={handleSignIn} id="login-form" action="/login" method="POST" className=" border-t-2 border-solid border-[#171717] text-center">
					<div className="grid-cols-gap mt-[62px] grid grid-cols-[525px_190px] place-content-center gap-[20px]">
						<div className="inp_group relative">
							<LoginInput
								type="email"
								label="이메일 아이디"
								name="email"
								style="mb-[20px] "
								placeholder="이메일 아이디를 @까지 정확하게 입력하세요."
								defaultValue={formState.email}
								onChange={handleInput}
							/>
							<LoginInput
								type="password"
								label="비밀번호"
								name="password"
								style="mb-[17px] "
								placeholder="영문+숫자+특수문자 조합 8~16자리를 입력해주세요."
								defaultValue={formState.password}
								onChange={handleInput}
							/>
							<div className="checkbox  relative mb-[20px] ml-[105px]">
								<input checked={isChecked} onChange={handleCheckboxChange} className="absolute left-[0] top-[0] z-[1] h-[25px] w-[25px] opacity-0" type="checkbox" id="saveEmail" name="saveEmail" />
								<label
									htmlFor="saveEmail"
									className={` relative block pl-[35px] text-left text-[14px] leading-[25px] before:absolute before:left-0 before:top-0 before:h-[25px] before:w-[25px] before:bg-[url('../../public/sprīt_2.png')] before:bg-no-repeat before:content-['']
									${isChecked ? 'before:bg-[left_-30px_top_0px]' : ''}`}
								>
									이메일 아이디 저장
								</label>
							</div>
						</div>
						<LoginButton type="submit">로그인</LoginButton>
					</div>
				</form>
				<div className="join_email relative mx-[auto] mt-[26px] flex justify-center border-t-[1px] border-solid border-[#ccc] py-[50px]">
					<p className="w-[354px] pt-[15px] text-[14px]">
						지금 가입하면 <strong>10% 할인 쿠폰+웰컴 쿠폰팩</strong> 증정
					</p>
					<div className="w-[326px]">
						<a href="/" className="block h-[50px] w-[100%] min-w-[180px] border-[1px] border-solid border-[rgb(51,51,51)] bg-[#fff] px-[20px] text-center text-[14px] leading-[48px] text-[#000]">
							이메일로 가입하기
						</a>
					</div>
				</div>
			</section>
		</>
	);
}

export default Login;
