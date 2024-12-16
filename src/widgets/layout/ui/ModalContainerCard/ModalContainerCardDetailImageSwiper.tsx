import { BaseButton } from '@/shared/ui';
import { ButtonList } from '@/widgets/button/ui';
import { ImageSwiper } from '@/widgets/swiper/ui';

const tempImageList = [
  {
    imageId: '1',
    isMain: false,
    imageUrl: 'images/eiffel-tower.svg',
    alt: 'Image 1',
  },
  {
    imageId: '2',
    isMain: true,
    imageUrl: 'images/spain.svg',
    alt: 'Image 2',
  },
  {
    imageId: '3',
    isMain: false,
    imageUrl: 'https://via.placeholder.com/800x600',
    alt: 'Image 3',
  },
];

const ModalContainerCardDetailImageSwiper = () => {
  return (
    <div
      aria-label="card-detail-image-swiper"
      className=" w-1/2"
    >
      <ImageSwiper imageList={tempImageList} />
      <div
        aria-label="card-detail-image-button-group"
        className=" flex"
      >
        <ButtonList className="flex justify-around w-full">
          <BaseButton
            variant="amber"
            onClick={() => {}}
          >
            사진 삭제
          </BaseButton>
          <BaseButton
            variant="skyblue"
            onClick={() => {}}
          >
            대표 사진으로 등록
          </BaseButton>
          <BaseButton
            variant="primary"
            onClick={() => {}}
          >
            사진 등록
          </BaseButton>
        </ButtonList>
      </div>
    </div>
  );
};

export default ModalContainerCardDetailImageSwiper;
