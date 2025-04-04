import styled from '@emotion/styled';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { CardImage, Size } from '@/shared/type';
import { Image } from '@/shared/ui';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 374px;
  margin: 20px auto;

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* 추가적으로 Swiper의 네비게이션 버튼 스타일을 커스터마이즈할 수 있습니다 */
  .swiper-button-next {
    background: url(${import.meta.env.BASE_URL}icons/arrow-right.png) no-repeat;
    background-size: 50% auto;
    background-position: center;
  }

  .swiper-button-prev {
    background: url(${import.meta.env.BASE_URL}icons/arrow-right.png) no-repeat;
    background-size: 50% auto;
    background-position: center;
    transform: rotate(180deg);
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }

  .swiper-pagination-bullet {
    background: #3498db; /* 원하는 색상으로 변경 */
  }
`;

export type ImageSwiperProps = {
  imageList: CardImage[];
  size?: Size;
};

const ImageSwiper = ({ imageList, size = 'medium' }: ImageSwiperProps) => {
  return (
    <StyledSwiper
      slidesPerGroup={1}
      navigation
      pagination
      mousewheel
      keyboard
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {imageList.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <Image
              src={image.imageUrl}
              alt={image.alt}
            />
          </SwiperSlide>
        );
      })}
    </StyledSwiper>
  );
};

export default ImageSwiper;
