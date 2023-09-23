/**
 *  ProductFilter Button component
 * */

// 각 버튼 유형에 대한 스타일을 정의합니다.
const buttonStyles = {
  primary: "bg-primary text-white text-base font-medium py-2 px-4 mx-1",
  secondary: "bg-secondary text-white text-base font-medium py-2 px-4 mx-1",
};

// 주어진 버튼 유형에 해당하는 스타일 문자열을 반환합니다.
function getButtonStyle(type) {
  return buttonStyles[type] || '';
}

// 공통 Button 컴포넌트. 
// type prop을 통해 스타일 유형을 받고, 이를 통해 적절한 클래스를 적용합니다.
function Button({ children, type, ...props }) {
  const styleClass = getButtonStyle(type);
  
  return (
    <button className={styleClass} {...props}>
      {children}
    </button>
  );
}

// Primary 스타일의 버튼 컴포넌트
export function PrimaryButton({ children, ...props }) {
   return <Button aria-label="필터적용" type="primary" {...props}>{children}</Button>;
}

// Secondary 스타일의 버튼 컴포넌트
export function SecondaryButton({ children, ...props }) {
   return <Button aria-label="초기화" type="secondary" {...props}>{children}</Button>;
}
