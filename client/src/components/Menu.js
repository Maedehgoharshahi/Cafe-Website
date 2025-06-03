import { useState } from 'react';
import Header from './Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , FreeMode  } from 'swiper/modules';
import '../css/Menu.css';
import { motion, AnimatePresence } from 'framer-motion';

function Menu() {
    const [categories , setCategories] = useState ([
        {
            key: 'all' ,
            name:"همه موارد",
            imageAdd : '/images/icons/tool.png'
        },
        {
            key : 'hot-coffee' ,
            name : 'قهوه گرم' ,
            imageAdd : '/images/icons/coffee-cup.png'
        } , 
        {
            key : 'cold-coffee' ,
            name : 'قهوه سرد' ,
            imageAdd : '/images/icons/iced-coffee.png'
        } , 
        {
            key : 'tea' ,
            name : 'چای و دمنوش ' ,
            imageAdd : '/images/icons/herbal-tea.png'
        } , 
        {
            key : 'mocktail' ,
            name : 'ماکتیل ' ,
            imageAdd : '/images/icons/mocktail.png'
        } , 
        {
            key : 'shakebar' ,
            name : ' شیک بار' ,
            imageAdd : '/images/icons/milk-shake.png'
        } , 
        {
            key : 'bakery' ,
            name : 'بیکری ' ,
            imageAdd : '/images/icons/croissant.png'
        } , 
        {
            key : 'pastry' ,
            name : 'پیستری ' ,
            imageAdd : '/images/icons/cupcake.png'
        } , 
    ])
    const [menuItems , setMenuItems] = useState ([
        {
            id:1,
            name : 'اسپرسو' ,
            price : '۱۰۵,۰۰۰ تومان' ,
            category : 'hot-coffee',
            imageAdd : '/images/menu/hotcoffee/1.jpeg'
        } , 
        {
            id:2,
            name : 'امریکانو' ,
            price : '۱۰۵,۰۰۰ تومان' ,
            category : 'hot-coffee',
            imageAdd : '/images/menu/hotcoffee/2.jpeg'
        } , 
        {
            id:3,
            name : 'لاته' ,
            price : '۱۴۰,۰۰۰ تومان' ,
            category : 'hot-coffee',
            imageAdd : '/images/menu/hotcoffee/3.jpeg'
        } , 
        {
            id:4,
            name : 'کاپوچینو' ,
            price : '۱۴۰,۰۰۰ تومان' ,
            category : 'hot-coffee',
            imageAdd : '/images/menu/hotcoffee/4.jpeg'
        } , 
        {
            id:5,
            name : 'آیس امریکانو' ,
            price : '۱۰۵,۰۰۰ تومان' ,
            category : 'cold-coffee',
            imageAdd : '/images/menu/coldcoffee/1.webp'
        } , 
        {
            id:6,
            name : 'آیس لاته' ,
            price : '۱۴۰,۰۰۰ تومان' ,
            category : 'cold-coffee',
            imageAdd : '/images/menu/coldcoffee/2.jpeg'
        } , 
        {
            id:7,
            name : 'آفوگاتو' ,
            price : '۱۶۰,۰۰۰ تومان' ,
            category : 'cold-coffee',
            imageAdd : '/images/menu/coldcoffee/3.jpeg'
        } , 
        {
            id:8,
            name : 'آیس تونیک' ,
            price : '۱۳۵,۰۰۰ تومان' ,
            category : 'cold-coffee',
            imageAdd : '/images/menu/coldcoffee/4.jpeg'
        } , 
        {
            id:9,
            name : 'چای سیاه' ,
            price : '۹۵,۰۰۰ تومان' ,
            category : 'tea',
            imageAdd : '/images/menu/tea/1.jpeg'
        } , 
        {
            id:10,
            name : 'چای کرک' ,
            price : '۱۲۵,۰۰۰ تومان' ,
            category : 'tea',
            imageAdd : '/images/menu/tea/2.jpeg'
        } , 
        {
            id:11,
            name : 'چای لاته' ,
            price : '۱۲۰,۰۰۰ تومان' ,
            category : 'tea',
            imageAdd : '/images/menu/tea/3.webp'
        } , 
        {
            id:12,
            name : 'آفرینش' ,
            price : '۱۳۵,۰۰۰ تومان' ,
            category : 'tea',
            imageAdd : '/images/menu/tea/4.jpeg'
        } , 
        {
            id:13,
            name : 'آرامش' ,
            price : '۱۳۰,۰۰۰ تومان' ,
            category : 'tea',
            imageAdd : '/images/menu/tea/5.jpeg'
        } , 
        {
            id:14,
            name : 'چای سبز' ,
            price : '۱۲۵,۰۰۰ تومان' ,
            category : 'tea',
            imageAdd : '/images/menu/tea/6.webp'
        } , 
        {
            id:15,
            name : 'لیموناد' ,
            price : '۱۱۰,۰۰۰ تومان' ,
            category : 'mocktail',
            imageAdd : '/images/menu/mocktail/1.jpeg'
        } , 
        {
            id:16,
            name : 'موهیتو' ,
            price : '۱۲۰,۰۰۰ تومان' ,
            category : 'mocktail',
            imageAdd : '/images/menu/mocktail/2.jpeg'
        } , 
        {
            id:17,
            name : 'بلو اوشن' ,
            price : '۱۵۵,۰۰۰ تومان' ,
            category : 'mocktail',
            imageAdd : '/images/menu/mocktail/3.webp'
        } , 
        {
            id:18,
            name : 'پاین اپل' ,
            price : '۱۴۵,۰۰۰ تومان' ,
            category : 'mocktail',
            imageAdd : '/images/menu/mocktail/4.webp'
        } , 
        {
            id:19,
            name : 'رد لیلو' ,
            price : '۱۶۰,۰۰۰ تومان' ,
            category : 'mocktail',
            imageAdd : '/images/menu/mocktail/5.webp'
        } , 
        {
            id:20,
            name : 'پیکسی' ,
            price : '۱۶۰,۰۰۰ تومان' ,
            category : 'mocktail',
            imageAdd : '/images/menu/mocktail/6.webp'
        } , 
        {
            id:21,
            name : 'شیک شکلات' ,
            price : '۱۵۰,۰۰۰ تومان' ,
            category : 'shakebar',
            imageAdd : '/images/menu/shakebar/1.jpeg'
        } , 
        {
            id:22,
            name : 'کوکی چاکلت' ,
            price : '۱۶۰,۰۰۰ تومان' ,
            category : 'shakebar',
            imageAdd : '/images/menu/shakebar/2.jpeg'
        } , 
        {
            id:23,
            name : 'شیک لوتوس' ,
            price : '۱۵۵,۰۰۰ تومان' ,
            category : 'shakebar',
            imageAdd : '/images/menu/shakebar/3.webp'
        } , 
        {
            id:24,
            name : 'نوتلا فندق' ,
            price : '۱۵۵,۰۰۰ تومان' ,
            category : 'shakebar',
            imageAdd : '/images/menu/shakebar/4.webp'
        } , 
        {
            id:25,
            name : 'کروسان کره ای' ,
            price : '۹۵,۰۰۰ تومان' ,
            category : 'bakery',
            imageAdd : '/images/menu/bakery/1.jpeg'
        } ,        
        {
            id:26,
            name : 'کروسان شکلات' ,
            price : '۱۴۵,۰۰۰ تومان' ,
            category : 'bakery',
            imageAdd : '/images/menu/bakery/2.jpeg'
        } ,        
        {
            id:27,
            name : 'کروسان پسته' ,
            price : '۲۵۰,۰۰۰ تومان' ,
            category : 'bakery',
            imageAdd : '/images/menu/bakery/3.jpeg'
        } ,        
        {
            id:28,
            name : 'کروسان بادام' ,
            price : '۲۳۰,۰۰۰ تومان' ,
            category : 'bakery',
            imageAdd : '/images/menu/bakery/4.jpeg'
        } ,        
        {
            id:29,
            name : 'رول نیویورکی' ,
            price : '۱۵۰,۰۰۰ تومان' ,
            category : 'bakery',
            imageAdd : '/images/menu/bakery/5.jpeg'
        } ,
        {
            id:30,
            name : 'باقلوا' ,
            price : '۱۵۵,۰۰۰ تومان' ,
            category : 'pastry',
            imageAdd : '/images/menu/pastry/1.webp'
        } ,         
        {
            id:31,
            name : 'وانیلا' ,
            price : '۱۳۰,۰۰۰ تومان' ,
            category : 'pastry',
            imageAdd : '/images/menu/pastry/2.jpeg'
        } ,         
        {
            id:32,
            name : 'کیک پسته' ,
            price : '۲۳۰,۰۰۰ تومان' ,
            category : 'pastry',
            imageAdd : '/images/menu/pastry/4.jpeg'
        } ,         
        {
            id:33,
            name : 'تیرامیسو' ,
            price : '۹۰,۰۰۰ تومان' ,
            category : 'pastry',
            imageAdd : '/images/menu/pastry/3.jpeg'
        } ,         
        {
            id:34,
            name : 'چاکلت پاستل' ,
            price : '۱۱۰,۰۰۰ تومان' ,
            category : 'pastry',
            imageAdd : '/images/menu/pastry/5.jpeg'
        } 
        
    ])
    const [selectedCategory, setSelectedCategory] = useState('all');
    const filteredItems = selectedCategory === 'all'? menuItems : menuItems.filter((item) => item.category === selectedCategory);


    return ( 
        <section className="menu">
            <Header/>
            <div className="swiper-wrapper">
                <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                style={{ paddingLeft: '8px', paddingRight: '8px' }}
                className="categories">
                    {
                        categories.map((item) => (
                            <SwiperSlide key={item.key} style={{ width: '100px' }}>
                                <div className={`item ${selectedCategory === item.key ? 'active' : ''}`} onClick={() => setSelectedCategory(item.key)} > 
                                    <img src={item.imageAdd} alt="" />
                                    <h3>{item.name}</h3>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="menu-list">
                <AnimatePresence>

                    {filteredItems.map((item) => (
                        <motion.div 
                        key={item.id} 
                        className='menu-item'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1}}
                        exit={{ opacity: 0}}
                        transition={{ duration: 0.3 }}
                        >
                            <img src={item.imageAdd} alt="" />
                            <div className="discription">
                                <h1>{item.name}</h1>
                                <p>{item.price}</p>
                            </div>
                        </motion.div>
                    ))}

                </AnimatePresence>
            </div>
        </section>
     );
}

export default Menu;