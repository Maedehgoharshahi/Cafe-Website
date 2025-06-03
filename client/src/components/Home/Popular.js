import { useRef, useState } from "react";
import "../../css/Home/Popular.css";

function Popular() {
    const [popular, setPopular] = useState([
        {
            id:1,
            name : 'کیک پسته' ,
            price : '۲۳۰,۰۰۰ تومان' ,
            imageAdd : '/images/menu/pastry/4.jpeg'
        } ,   
        {
            id: 2,
            name: "پیکسی",
            imageAdd: "./images/menu/mocktail/6.webp",
            price: "۱۶۰,۰۰۰ تومان",
        },
        {
            id: 3,
            name: "موکا",
            imageAdd: "./images/menu/hotcoffee/3.jpeg",
            price: "۱۴۵,۰۰۰ تومان",
        }
    ]);

    return (
        <section className="popular">
            <h1>پرطرفدار ها</h1>
            {/* <p>در این بخش، تعدادی از آیتم‌های پرفروش منوی کافه شامل انواع کیک و نوشیدنی انتخاب شده‌اند. این موارد بر اساس بازخورد مشتریان و میزان سفارش‌ها تعیین شده‌اند و نمایان‌گر سلیقه عمومی و کیفیت ثابت منوی ما هستند.</p> */}
            <div className="container">
                <div className="line"></div>
                <div className="options" >
                    {popular.map((item, index) => (
                        <div key={index} className="item">
                            <img src={item.imageAdd} alt="" />
                            <h2>{item.name}</h2>
                            <p>{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Popular;
