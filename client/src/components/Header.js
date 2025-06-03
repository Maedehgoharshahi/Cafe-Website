import '../css/Header.css';
import { useState } from 'react';
import { Link } from "react-router";


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }
    return ( 
        <header>
            <div>
                <h1>نام کافه</h1>
                <i className="bx bx-menu" onClick={toggleMenu}></i>
            </div>
            <ul className={isMenuOpen ? "active" : ""}>
                <li><Link to='/'>صفحه اصلی</Link></li>
                <li><Link to="/menu">منو</Link></li>
                <li><Link to="/reservation"> رزرو میز</Link></li>
                <li><Link to="/about">درباره ما</Link></li>
                <li><Link to="/contact">تماس با ما</Link></li>
            </ul>
        </header>
     );
}

export default Header;