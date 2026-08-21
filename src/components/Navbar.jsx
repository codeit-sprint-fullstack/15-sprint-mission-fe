import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <>
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between px-4 md:px-8 bg-white py-[13px]">
        <div className="flex items-center gap-6 md:gap-10">
          <div className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="판다마켓 로고" className="w-8 h-8" />
            <NavLink
              to="/"
              className="no-underline text-(--color-logoText) font-bold text-[26px] font-rokaf whitespace-nowrap"
            >
              판다마켓
            </NavLink>
          </div>

          <div className="flex items-center gap-4 md:gap-6 font-bold text-[18px] text-[#4B5563]">
            <NavLink to="/" className="no-underline whitespace-nowrap">
              자유게시판
            </NavLink>
            <NavLink to="/" className="no-underline whitespace-nowrap">
              중고마켓
            </NavLink>
          </div>
        </div>

        <NavLink
          to="/"
          className="bg-[#3692FF] px-[23px] py-[12px] rounded-[8px] font-semibold text-white whitespace-nowrap shrink-0 no-underline"
        >
          로그인
        </NavLink>
      </nav>
      <hr className="border-gray-200 m-0" />
    </>
  );
}

export default Navbar;
