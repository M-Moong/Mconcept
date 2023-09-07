/**
 *  App은 가장 기본이 되는 함수
 * */
function App() {

  return (
    <>
      <h1 className='screens:mobile font-bold text-grey-700'>
        프로젝트 세팅 이준석 테스트
        테스트 진행중입니다.
        테스트 2 입니다
        테스트 3 입니다. (지영)
      </h1>
      <h2 className="text-lg text-secondary mobile:text-primary">project setting</h2>

      <h1 className="text-4xl text-primary">h1</h1>
      <h2 className="text-3xl text-secondary">h2</h2>
      <h3 className="text-2xl text-tertiary">h3</h3>
      <h4 className="text-xl text-grey-900">h4</h4>
      <p className="text-lg text-grey-400">body1</p>
      <p className="text-base">body1</p>
      <p className="text-sm">body1</p>
      <p className="text-xs">body1</p>
    </>
  );
}

export default App;
