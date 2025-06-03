import '../css/Reservation.css'
import Footer from './Footer';
import Header from './Header';
import Headline from './Headline';
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

function Reservation() {
    return ( 
        <section className='reservation'>
            <Header/>
            <Headline title='رزرو میز'/>
            <div className='container'>
                <div className="reservation-container">
                    <img src="./images/download.jpg" alt="" />
                    <form action="">
                        <h1>رزرو میز برای لحظات خاص شما </h1>
                        <table>
                            <tr>
                                <td>نام و نام خانوادگی</td>
                                <td>
                                    <input type="text" placeholder='مثال : زهرا احمدی' className='input' required/>
                                </td>
                            </tr>
                            <tr>
                                <td>شماره تماس</td>
                                <td>
                                    <input type="tel" placeholder='مثال : 09015486645' className='input' required/>
                                </td>
                            </tr>
                            <tr>
                                <td>تعداد نفرات</td>
                                <td>
                                    <input type="number" placeholder='مثال : 2' className='input' required/>
                                </td>
                            </tr>
                            <tr>
                                <td>تاریخ و زمان</td>
                                <td>
                                    <DatePicker
                                        className="custom-datepicker"
                                        format="YYYY/MM/DD HH:mm"
                                        calendarPosition="bottom-right"
                                        calendar="persian"  
                                        locale="persian_fa"
                                        plugins={[<TimePicker position="bottom" hideSeconds />]}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button type="submit" className="w-full">ثبت رزرو</button>
                                </td>
                            </tr>
                        </table>

                    </form>
                </div>
            </div>
            <Footer/>
        
        </section>
     );
}

export default Reservation;