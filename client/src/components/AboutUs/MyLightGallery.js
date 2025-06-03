import '../../css/AboutUs/MyLightGallery.css'
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from "lightgallery/plugins/thumbnail";

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


function MyLightGallery() {
    const images = [
        {
            id: 1,
            imageAdd : '/images/gallery1.jpg',
            size: '815*1020'
        },
        {
            id: 2,
            imageAdd : '/images/gallery2.jpg',
            size: '815*1020'
        },
        {
            id: 3,
            imageAdd : '/images/gallery3.jpg',
            size: '818*1020'
        },
        {
            id: 4,
            imageAdd : '/images/gallery4.jpg',
            size: '850*1020'
        },
        {
            id: 5,
            imageAdd : '/images/gallery5.jpg',
            size: '815*1020'
        },
        {
            id: 1,
            imageAdd : '/images/gallery1.jpg',
            size: '815*1020'
        },
        {
            id: 2,
            imageAdd : '/images/gallery2.jpg',
            size: '815*1020'
        },
        {
            id: 3,
            imageAdd : '/images/gallery3.jpg',
            size: '818*1020'
        },
        {
            id: 4,
            imageAdd : '/images/gallery4.jpg',
            size: '850*1020'
        },
        {
            id: 5,
            imageAdd : '/images/gallery5.jpg',
            size: '815*1020'
        },
        {
            id: 4,
            imageAdd : '/images/gallery4.jpg',
            size: '850*1020'
        },
        {
            id: 5,
            imageAdd : '/images/gallery5.jpg',
            size: '815*1020'
        },
    ]

    return ( 
        <LightGallery
        plugins={[lgZoom, lgThumbnail]}
        mode="lg-fade"
        pager={false}
        thumbnail={true}
        autoplayFirstVideo={false}
        elementClassNames={'my-light-gallery'}
        mobileSettings={{
          controls: false,
          showCloseIcon: false,
          download: false,
          rotate: false,
        }}>
            {
                images.map ((image , index)=> (
                    <a 
                    key={index}
                    data-lg-size={image.size}
                    data-src={image.imageAdd}
                    className='gallery-item'
                    >
                        <img src={image.imageAdd}  />
                    </a>
                ))
            }
        </LightGallery>
     );
}

export default MyLightGallery;