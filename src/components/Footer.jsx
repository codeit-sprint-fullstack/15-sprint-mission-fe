import "./Footer.css";
import iconFacebook from "../assets/icon-facebook.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconYoutube from "../assets/icon-youtube.svg";
import iconInstagram from "../assets/icon-instagram.svg";

function Footer() {
    return (
        <footer className="footer">
            <div className="footerContent">
                <p className="footerCopyright">©codeit - 2024</p>

                <div className="footerLinks">
                    <p>Privacy Policy</p>
                    <p>FAQ</p>
                </div>

                <div className="footerSocials">
                    <img src={iconFacebook} alt="" />
                    <img src={iconTwitter} alt="" />
                    <img src={iconYoutube} alt="" />
                    <img src={iconInstagram} alt="" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;