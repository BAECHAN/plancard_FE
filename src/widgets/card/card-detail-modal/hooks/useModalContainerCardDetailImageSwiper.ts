import { PICKED_CARD_LIST } from '@/shared/const';
import { CardImage } from '@/shared/type';
import { useCallback, useState } from 'react';
import Swiper from 'swiper';

/**
 * 메인 이미지를 맨 앞으로 정렬하는 함수
 * @param imageList 이미지 리스트
 * @returns 메인 이미지를 맨 앞으로 정렬한 이미지 리스트
 */
const convertSortingMainFirst = (imageList: CardImage[]) => {
  return imageList.sort((a, b) =>
    a.isMain === b.isMain ? 0 : a.isMain ? -1 : 1,
  );
};

const useModalContainerCardDetailImageSwiper = () => {
  const [swiperInstance, setSwiperInstance] = useState<Swiper | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainFirstImageList, setMainFirstImageList] = useState<CardImage[]>(
    convertSortingMainFirst(PICKED_CARD_LIST),
  );

  const handleSwiperReady = useCallback((swiper: Swiper) => {
    setSwiperInstance(swiper);
  }, []);

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDeleteImage = () => {
    setMainFirstImageList(imageList => {
      const newArr = [...imageList];
      newArr.splice(currentIndex, 1);
      return newArr;
    });
  };

  const handleRegisterMainImage = () => {
    setMainFirstImageList(imageList => {
      const newArr = imageList.map((image, index) => ({
        ...image,
        isMain: index === currentIndex,
      }));
      return convertSortingMainFirst(newArr);
    });
  };

  const checkMainImage = () => {
    return mainFirstImageList[currentIndex].isMain;
  };

  return {
    swiperInstance,
    mainFirstImageList,
    checkMainImage,
    handleSwiperReady,
    handleIndexChange,
    handleDeleteImage,
    handleRegisterMainImage,
  };
};

export default useModalContainerCardDetailImageSwiper;
