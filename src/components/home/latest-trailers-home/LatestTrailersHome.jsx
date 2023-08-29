import { Container } from 'react-bootstrap';
import StreamingTrailers from './StreamingTrailers';
import OnTvTrailers from './OnTvTrailers';
import ForRentTrailers from './ForRentTrailers';
import InTheatersTrailers from './InTheatersTrailers';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const LatestTrailersHome = () => {
    const [bullets, setBullets] = useState([
        { name: "Streaming" },
        { name: "On Tv" },
        { name: "For Rent" },
        { name: "In Theaters" },
    ])
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<button  class="' + className + '">'  + (bullets[index].name) + '</button>';
        }
    }


    return (
        <Container fluid>
            <div className="container-header">
                <h2>Latest Trailers</h2>
                <Swiper
                    modules={[Pagination]}
                    pagination={pagination}
                    spaceBetween={50}
                    slidesPerView={1}
                    className="trailers-swiper"
                >
                    <SwiperSlide><StreamingTrailers /></SwiperSlide>
                    <SwiperSlide><OnTvTrailers /></SwiperSlide>
                    <SwiperSlide><ForRentTrailers /></SwiperSlide>
                    <SwiperSlide><InTheatersTrailers /></SwiperSlide>

                </Swiper>
            </div>
            <div>
                <Outlet />
            </div>
        </Container >
    )
};

export default LatestTrailersHome;
