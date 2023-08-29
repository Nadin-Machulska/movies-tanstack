import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useState } from "react";
import Streaming from "./Streaming";
import OnTv from "./OnTv";
import ForRent from "./ForRent";
import InTheaters from "./InTheaters";
const WhatsPopularHome = () => {
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
            <div className='trending-header'>
                <h2>What`s Popular</h2>
                <div className="trending-controls">
                </div>
            </div>

            <Swiper className='swiper-container-bg'
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={pagination}
            >
                <SwiperSlide><Streaming/></SwiperSlide>
                <SwiperSlide><OnTv/></SwiperSlide>
                <SwiperSlide><ForRent/></SwiperSlide>
                <SwiperSlide><InTheaters/></SwiperSlide>
            </Swiper>
        </Container >

    )
};

export default WhatsPopularHome;