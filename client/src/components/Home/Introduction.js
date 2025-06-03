import '../../css/Home/Introduction.css';
import { Link } from 'react-router';

function Introduction() {
    return ( 
    <section className="introduction">
        <h1>معرفی کافه</h1>
        <div className="container">
            <div className="content">
                <p>کافه ما فعالیت خود را از سال ۱۳۹۵ آغاز کرد، با این هدف که مکانی خاص برای علاقه‌مندان به قهوه و نوشیدنی‌های خاص فراهم کند. از همان ابتدا، باور ما بر این بود که قهوه تنها یک نوشیدنی نیست، بلکه تجربه‌ای است از طعم، آرامش و ارتباط انسانی. بر همین اساس، تلاش کردیم فضایی گرم، دلنشین و صمیمی خلق کنیم که هم برای قرارهای دوستانه و گفت‌وگوهای صمیمی مناسب باشد و هم پناهگاهی آرام برای لحظاتی خلوت و اندیشه.</p>
                <br />
                <p>ما با بهره‌گیری از بهترین و باکیفیت‌ترین دانه‌های قهوه از سراسر جهان، و با همکاری تیمی حرفه‌ای، آموزش‌دیده و دلسوز، تجربه‌ای متفاوت از نوشیدنی‌های گرم و سرد را برای شما فراهم کرده‌ایم. هر فنجان قهوه در کافه ما با دقت، عشق و احترام به سلیقه شما آماده می‌شود.</p>
                <button><Link to="/about">درباره ما</Link> </button>
            </div>
            <div className="pictures">
                <img src="./images/blob-haikei.svg" alt="" className='item1'/>
                <img src="./images/gallery2.jpg" alt="" className='item2'/>
                <img src="./images/gallery5.jpg" alt="" className='item3'/>
            </div>
        </div>
    </section> 
    );
}

export default Introduction;