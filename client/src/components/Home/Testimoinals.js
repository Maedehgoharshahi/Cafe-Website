import '../../css/Home/Testimoinals.css';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination ,Autoplay  } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Testimoinals() {
    const [comments , setComments] = useState([
        {
            id:1,
            name:'محمدرضا',
            imageAdd: './images/persons/person_1.jpg',
            comment: 'بهترین تجربه کافه‌ای که داشتم! قهوه فوق‌العاده خوش‌طعم، دکوراسیون دلنشین و برخورد کارکنان عالی بود. حتماً دوباره میام!',
            color:'#a59079'
        },
        {
            id:2,
            name:'نگین',
            imageAdd: './images/persons/person_5.jpg',
            comment: 'چیزی که این کافه رو خاص می‌کنه، حس خوبیه که از لحظه ورود تا زمان خداحافظی تجربه می‌کنی. کیفیت عالی و قیمت مناسب!',
            color:'#F3A34D'
        },
        {
            id:3,
            name:'آرش',
            imageAdd: './images/persons/person_3.jpg',
            comment: 'محیط دنج و آرامش‌بخش، برخورد پرسنل مودب و حرفه‌ای، و نوشیدنی‌های خوشمزه! اینجا بهترین انتخاب برای مطالعه یا کاره.',
            color:'#C78F6A'
        },
        {
            id:4,
            name:'سارا',
            imageAdd: './images/persons/person_4.jpg',
            comment: 'این کافه یه حس عالی و صمیمی داره. کیک‌های خوشمزه، موسیقی دلنشین و فضای گرمش باعث میشه همیشه اینجا رو برای قرارهای دوستانه انتخاب کنم.',
            color:'#f8d4b4'
        },
        {
            id:5,
            name:'امیرعلی',
            imageAdd: './images/persons/person_2.jpg',
            comment: 'قهوه‌های اینجا واقعاً کیفیت بالایی دارن. هر بار که میام یه نوشیدنی جدید امتحان می‌کنم و همیشه راضی‌ام. دمتون گرم!',
            color:'#f18d3d'
        },
    ])
    return ( 
        <section className="testimoinals">
            <h1>نظرات</h1>
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        breakpoints={{
            768: { slidesPerView: 2.5 },
            0: { slidesPerView: 1 },
        }}
        className="mySwiper"
      >
                {comments.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="item">
                            <div className="image-container" style={{backgroundColor:item.color}}>
                                <img src={item.imageAdd} alt={item.name} />
                            </div>
                            <h2>{item.name}</h2>
                            <p>{item.comment}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
     );
}

export default Testimoinals;