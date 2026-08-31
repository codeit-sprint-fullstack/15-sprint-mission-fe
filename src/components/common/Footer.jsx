import ic_facebook from "@/assets/common/ic_facebook.svg";
import ic_twitter from "@/assets/common/ic_twitter.svg";
import ic_youtube from "@/assets/common/ic_youtube.svg";
import ic_instagram from "@/assets/common/ic_instagram.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex justify-between px-4 md:px-8 bg-[#111827] pt-10 pb-24">
      <span className="text-[#9CA3AF]">©codeit - 2024</span>
      <div className="flex gap-[30px] text-[#E5E7EB]">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/faq">FAQ</Link>
      </div>
      <div className="flex justify-between gap-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ic_facebook} alt="페이스북 아이콘 이미지" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={ic_twitter} alt="트위터 아이콘 이미지" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={ic_youtube} alt="유튜브 아이콘 이미지" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ic_instagram} alt="인스타그램 아이콘 이미지" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
