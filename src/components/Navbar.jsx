import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';

function Navbar(){
    return (
        <>
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
            <img src={logo}></img>
            <NavLink to='/' className={styles.logoText}>판다마켓</NavLink>
            </div>
            <div>
            <NavLink to='/'>자유게시판</NavLink>
            <NavLink to='/'>중고마켓</NavLink>
            </div>
            <NavLink to='/'><button type="button">로그인</button></NavLink>
        </nav>  
        
        </>
    )
}

export default Navbar;