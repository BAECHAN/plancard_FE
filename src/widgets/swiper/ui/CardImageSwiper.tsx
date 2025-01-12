// Import Swiper React components
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import {
  ImageSwiperProps,
  StyledSwiper,
} from '@/widgets/swiper/ui/ImageSwiper';
import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';

type CardImageSwiperProps = ImageSwiperProps & {
  onIndexChange?: (index: number) => void;
  onSwiperReady?: (swiper: Swiper) => void;
};

const CardImageSwiper = ({
  imageList,
  onIndexChange,
  onSwiperReady,
  size = 'medium',
}: CardImageSwiperProps) => {
  return (
    <StyledSwiper
      slidesPerGroup={1}
      navigation
      pagination
      mousewheel
      keyboard
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
      onSlideChange={swiper => {
        onIndexChange?.(swiper.activeIndex); // 현재 인덱스를 부모로 전달
      }}
      onSwiper={swiper => {
        onSwiperReady?.(swiper);
      }}
    >
      {imageList.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <img
              src={image.imageUrl}
              alt={image.alt}
            />
          </SwiperSlide>
        );
      })}
    </StyledSwiper>
  );
};

export default CardImageSwiper;
