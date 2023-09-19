function IncorrectMessage() {
	return (
		<>
			<div className="incorrectBox bottom-[0] left-[0] ml-[105px] text-left text-[12px] text-[#fa5500] before:mb-[0] before:ml-[3px] before:mr-[4px] before:mt-[3px] before:inline-block before:h-[11px] before:w-[11px] before:bg-[url('../assets/images/login/icon_incorrect.svg')] before:bg-no-repeat before:align-top before:content-[''] ">
				<span className="incorrect">이메일 아이디를 @까지 정확하게 입력해 주세요.</span>
			</div>
			<div className="incorrectBox bottom-[0] left-[0] ml-[105px] text-left text-[12px] text-[#fa5500] before:mb-[0] before:ml-[3px] before:mr-[4px] before:mt-[3px] before:inline-block before:h-[11px] before:w-[11px] before:bg-[url('../assets/images/login/icon_incorrect.svg')] before:bg-no-repeat before:align-top before:content-[''] ">
				<span className="incorrect">아이디 또는 비밀번호가 일치하지 않습니다. 다시 입력해주세요</span>
				<span id="failCount" className="text-[12px] text-[#fa5500]">
					(1/5)
				</span>
			</div>
			<div className="incorrectBox bottom-[0] left-[0] ml-[105px] text-left text-[12px] text-[#fa5500] before:mb-[0] before:ml-[3px] before:mr-[4px] before:mt-[3px] before:inline-block before:h-[11px] before:w-[11px] before:bg-[url('../assets/images/login/icon_incorrect.svg')] before:bg-no-repeat before:align-top before:content-[''] ">
				<span className="incorrect">이메일 아이디를 입력해주세요.</span>
			</div>
			<div className="incorrectBox bottom-[0] left-[0] ml-[105px] text-left text-[12px] text-[#fa5500] before:mb-[0] before:ml-[3px] before:mr-[4px] before:mt-[3px] before:inline-block before:h-[11px] before:w-[11px] before:bg-[url('../assets/images/login/icon_incorrect.svg')] before:bg-no-repeat before:align-top before:content-[''] ">
				<span className="incorrect">비밀번호를 입력해주세요.</span>
			</div>
		</>
	);
}
export default IncorrectMessage;
