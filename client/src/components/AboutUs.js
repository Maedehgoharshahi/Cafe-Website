import '../css/AboutUs.css';
import Footer from './Footer';
import Header from './Header';
import Headline from './Headline'; 
import { useState } from 'react';

import MySwiper from './AboutUs/MySwiper';
import MyLightGallery from './AboutUs/MyLightGallery';

function AboutUs() {
    const [members, setMembers] = useState([
        {
          id: 1,  
          name: "علی رضایی",
          role: "باریستا",
          image: "./images/persons/person_1.jpg",
        },
        {
          id: 2,  
          name: "حسین احمدی",
          role: "بارتندر",
          image: "./images/persons/person_3.jpg",
        },
        {
          id: 3,  
          name: "امیرحسین مرادی",
          role: "صندوقدار",
          image: "./images/persons/person_2.jpg",
        },
        {
          id: 4,  
          name: "سحر کریمی",
          role: "باریستا",
          image: "./images/persons/person_4.jpg",
        },
      ]);
      
    return ( 
        <section className="aboutus">
            <Header/>
            <Headline title='درباره ما'/>
            <div className="history">
                <div className="content">
                    <p>کافه ما در سال ۱۳۹۵ با این ایده شکل گرفت که جایی بسازیم برای آرامش، گفتگو و لذت از یک فنجان قهوه‌ عالی. از همان روزهای نخست، هدف‌ ما چیزی فراتر از سرو قهوه بود — ما می‌خواستیم تجربه‌ای متفاوت خلق کنیم که طعم، فضا و حس خوب را در کنار هم داشته باشد.</p>
                    <p>با استفاده از دانه‌های مرغوب و همراهی باریستاهای حرفه‌ای، هر نوشیدنی را با دقت و عشق آماده می‌کنیم. فضای داخلی کافه با الهام از سبک‌های مدرن و نوستالژیک طراحی شده تا محیطی گرم و دنج برای مطالعه، کار یا گپ‌و‌گفت دوستانه فراهم کند.</p>
                    <p>در این سال‌ها، کافه ما به بخشی از روزمره‌ و خاطرات بسیاری از مشتریان تبدیل شده و این همراهی، دلگرمی بزرگی برای ماست. هنوز هم با همان شوق روز اول، هر روز در کنار شما می‌نویسیم: قصه‌ای تازه، با طعم قهوه.</p>
                </div>
                <div className="media">
                    <img src="./images/carousel1.jpg" alt="" />
                    <video autoPlay loop muted>
                        <source src='./images/about.mp4' type='video/mp4'/>
                    </video>
                </div>
            </div>
            <div className="team">
                <h1>تیم ما</h1>
                <p>تیم ما از افراد متخصص و با تجربه در زمینه قهوه و شیرینی‌پزی تشکیل شده است. هر یک از اعضای ما با دقت و حرفه‌ای‌گری، برای ارائه بهترین کیفیت تلاش می‌کنند.</p>
                <div className="members">
                    {
                        members.map((member) => (
                            <div className="member" key={member.id}>
                                <img src={member.image} alt="" />
                                <h2>{member.name}</h2>
                                <p>{member.role}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="gallery">
                <h1>گالری تصاویر</h1>
                <div className="pictures">
                    <div className="carousel">
                        <MySwiper/>
                    </div>
                    <div className="lightgallery">
                        <MyLightGallery/>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
     );
}

export default AboutUs;