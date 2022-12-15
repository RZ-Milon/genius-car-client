import React from 'react';
import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'
import image5 from '../../../assets/images/banner/5.jpg'
import image6 from '../../../assets/images/banner/6.jpg'
import './Banner.css';
import BannerItem from './BannerItem';


const Banner = () => {
    const bannerData = [
        {
            image: image1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: image2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: image3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: image4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: image5,
            prev: 4,
            id: 5,
            next: 6
        },
        {
            image: image6,
            prev: 5,
            id: 6,
            next: 1
        },
    ]
    return (
        <div className="carousel w-full">
            {
                bannerData.map(slide=> <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
            {/* <BannerItem image={image1}></BannerItem>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} alt="" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;