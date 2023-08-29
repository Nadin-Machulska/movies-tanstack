import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Container } from 'react-bootstrap';
import 'swiper/css/navigation';
import 'swiper/css';
import { useSwiper } from 'swiper/react';
import ThisWeek from './ThisWeek';
import TrendingToday from './TrendingToday';

const TrendingHome = () => {

    return (
        <Container fluid>
            <div className='trending-header'>
                <h2>Trending</h2>
                <div className="trending-controls">
                    <button id='prevBtn' >This Week</button>
                    <button id='nextBtn' >Today</button>
                </div>
            </div>

            <Swiper className='swiper-container-bg'
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    nextEl: '#nextBtn',
                    prevEl: '#prevBtn',
                }
                }
            >
                <SwiperSlide><ThisWeek /></SwiperSlide>
                <SwiperSlide><TrendingToday /></SwiperSlide>

            </Swiper>
        </Container >

    )
};

export default TrendingHome;