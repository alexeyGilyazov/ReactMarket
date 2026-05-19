import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/effect-coverflow';
import './Slider.css'
import { dataImagesSlider } from './dataImagesSlider'
import plashka from '../../img/platform.png'

export default function Slider() {


    return (
        <section className="slider">
            <Swiper
                modules={[EffectCoverflow]}
                effect="coverflow"
                spaceBetween={40}
                slidesPerView={5}
                centeredSlides={true}
                loop={true}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 20,
                    depth: 20,
                    modifier: 1,
                    slideShadows: false,
                }}
            >
                {dataImagesSlider.map((el, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-container">
                            <img
                                className="slider__img"
                                src={el.src}
                                alt={el.alt}
                                style={{
                                    width: '373px',
                                    height: '373px',
                                    cursor: 'grab',
                                    objectFit: 'cover',
                                }}
                            />
                            <div className="slide-label">
                                <img src={plashka} alt="alt" />
                            </div>
                            <p className="slide__desc">Perplexed Mind</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}