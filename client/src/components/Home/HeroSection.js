import '../../css/Home/HeroSection.css';
import {Link} from 'react-router';

function HeroSection() {
    return ( 
        <section className="heroSection">
            <img src="/images/coffee.png" alt="" />
            <div className="content">
                <h1>به کافه [نام کافه] خوش آمدید! </h1>
                <p>جایی برای لحظه‌های ناب، عطر قهوه و طعم دلچسب آرامش.</p>
                <div className='buttons'>
                    <button><Link to="/menu">مشاهده منو</Link></button>
                    <button><Link to="/reservation">رزرو منو </Link></button>
                </div>
            </div>
        </section>
     );
}

export default HeroSection;