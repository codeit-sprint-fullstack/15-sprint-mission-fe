import {NavLink} from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar(){
    return (
        <>
        <nav className="flex items-center justify-between px-[200px] bg-white font-[ROKAFSansMedium,sans-serif]">
            <div className="flex items-center gap-2.5">
            <img src={logo}></img>
            <NavLink to='/' className="no-underline text-[var(--color-logoText)]">판다마켓</NavLink>
            </div>
            <div className="flex items-center gap-6">
            <NavLink to='/' className="no-underline">자유게시판</NavLink>
            <NavLink to='/' className="no-underline">중고마켓</NavLink>
            </div>
            <NavLink to='/'><button type="button">로그인</button></NavLink>
        </nav>  
        <hr/>
        </>
    )
}

export default Navbar;