import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between px-50 bg-white py-[13px]">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <img src={logo} className=""></img>
            <NavLink
              to="/"
              className="no-underline text-(--color-logoText) font-bold text-[26px] font-rokaf"
            >
              판다마켓
            </NavLink>
          </div>

          <div className="flex items-center gap-6 font-bold text-[18px] text-[#4B5563]">
            <NavLink to="/" className="no-underline">
              자유게시판
            </NavLink>
            <NavLink to="/" className="no-underline">
              중고마켓
            </NavLink>
          </div>
        </div>

        <NavLink
          to="/"
          className="bg-[#3692FF] px-[23px] py-[12px] rounded-[8px] font-semibold text-white"
        >
          <button type="button">로그인</button>
        </NavLink>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
