import '../css/ContactUs.css';
import Footer from './Footer';
import Header from './Header';
import Headline from './Headline';

function ContactUs() {
    return ( 
        <section className="contact-us">
            <Header/>        
            <Headline title='تماس با ما'/>
            <div className='container'>
                <div className="contact-container">
                    <div>
                        <span>
                            <i className='bx bx-phone' ></i>
                            <h3>۰۵۱-۳۸۴۵۶۷۸۹</h3>
                        </span>
                        <p>برای تماس سریع با ما، می‌توانید با این شماره ارتباط بگیرید.</p>
                    </div>
                    <div>
                        <span>
                            <i className='bx bx-map'></i>
                            <h3>مشهد، بلوار سجاد، خیابان حامد جنوبی، پلاک ۱۲</h3>
                        </span>
                        <p>ما در این مکان آماده پذیرایی از شما هستیم. منتظر حضورتان هستیم!</p>
                    </div>
                    <div>
                        <span>
                            <i className='bx bx-mail-send'></i>
                            <h3>info@example.com</h3>
                        </span>
                        <p>سوالات و پیشنهادات خود را از طریق ایمیل با ما در میان بگذارید.</p>
                    </div>
                </div>
                <div className="map-comment">
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.817894379069!2d59.548021724335456!3d36.31672267238887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6c9215bf93b02f%3A0xed14df90cf95e878!2z2KfYs9iq2KfZhiDYrtix2KfYs9in2YYg2LHYttmI24zYjCDZhdi02YfYr9iMINit2KfZhdivINis2YbZiNio24zYjCDZvtmE2KfaqSAxMtiMINin24zYsdin2YY!5e0!3m2!1sfa!2s!4v1742378836409!5m2!1sfa!2s" 
                        title="نقشه محل کافه ما"
                        width="600"
                        height="450"
                        style={{border:'0'}}
                        allowfullscreen=""
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <form>
                        <h4>دیدگاه خود را با ما در میان بگذارید</h4>
                        <input type="text" placeholder='نام و نام خانوادگی ...' />
                        <input type="email" placeholder='ایمیل ...'/>
                        <textarea name="comment" placeholder='دیدگاه خود را بنویسید ...'></textarea>
                        <button>ارسال نظر</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </section>
     );
}

export default ContactUs;