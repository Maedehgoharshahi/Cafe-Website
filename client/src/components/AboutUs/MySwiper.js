import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import '../../css/AboutUs/MySwiper.css'

function MySwiper() {
    return ( 
        <Swiper
        pagination={{ clickable: true }}
        cssMode={true}
        navigation={false}
        mousewheel={true}
        loop={true}
        keyboard={true}
        autoplay={{
            delay: 8000, 
            disableOnInteraction: false 
          }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard  , Autoplay]}
        className="gallery-swiper"
        >
            <SwiperSlide><img src="./images/gallery1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./images/gallery2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./images/gallery3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./images/gallery4.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./images/gallery5.jpg" alt="" /></SwiperSlide>
        </Swiper>
     );
}

export default MySwiper;