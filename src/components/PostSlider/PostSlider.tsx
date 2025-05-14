import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { PostSlide } from '@components/PostSlide';
import style from './PostSlider.module.scss';
import { slides } from '@constants/slides';
import { useWindowSize } from '@hooks/useWindowSize';

export const PostSlider = () => {
  const { width } = useWindowSize();

  return (
    <section className={style.postSlider}>
      <div className={style.content}>
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={width >= 2048 ? 5 : (width >= 1600 ? 4 : (width >= 992 ? 3 : (width < 640 ? 1 : 2)))}
          spaceBetween={10}
          loop={false}
          grabCursor={true}
        >
          {slides.map(slide =>
            <SwiperSlide key={slide.id}>
              <PostSlide slide={slide} />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </section>
  );
}
