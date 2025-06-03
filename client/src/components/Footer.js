import '../css/Footer.css';
import {Link} from 'react-router';

function Footer() {
    return ( 
        <footer>
            <h1>نام کافه</h1>
            <div className="address">
                <i className='bx bxs-map'></i>
                <p>مشهد، بلوار سجاد، خیابان حامد جنوبی، پلاک ۱۲</p>
            </div>
            <div className="phone">
                <i className='bx bxs-phone'></i>
                <p>۰۵۱-۳۸۴۵۶۷۸۹</p>
            </div>
            <ul>
                <li><Link to='/'>صفحه اصلی</Link></li>
                <li><Link to="/menu">منو</Link></li>
                <li><Link to="/reservation"> رزرو میز</Link></li>
                <li><Link to="/about">درباره ما</Link></li>
                <li><Link to="/contact">تماس با ما</Link></li>
            </ul>
            <div className="social-media">
                <i className='bx bxl-instagram-alt' ></i>
                <i className='bx bxl-telegram' ></i>
                <i className='bx bxl-gmail'></i>
            </div>
        </footer>
    );
}

export default Footer;