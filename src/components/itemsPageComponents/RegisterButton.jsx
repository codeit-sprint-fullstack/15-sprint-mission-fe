import { NavLink } from "react-router-dom";

function RegisterButton() {
  return (
    <NavLink
      to="/registration"
      className="flex items-center justify-center px-[23px] bg-[#3692FF] text-[#F3F4F6] rounded-[8px] font-semibold whitespace-nowrap w-[133px] h-[42px] no-underline"
    >
      상품 등록하기
    </NavLink>
  );
}

export default RegisterButton;