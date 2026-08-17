function RegisterButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-[23px] py-3 bg-[#3692FF] text-[#F3F4F6] rounded-[8px] font-semibold whitespace-nowrap"
    >
      상품 등록하기
    </button>
  );
}

export default RegisterButton;