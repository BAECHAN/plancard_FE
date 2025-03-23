import { BaseButton } from '@/shared/ui';
import { ButtonList } from '@/widgets/button/ui';
import { useModalContainerCardDetailImageSwiper } from '@/widgets/card/card-detail-modal/hooks';
import { CardImageSwiper } from '@/widgets/swiper/ui';

const ModalContainerCardDetailImageSwiper = () => {
  const {
    swiperInstance,
    mainFirstImageList,
    checkMainImage,
    handleSwiperReady,
    handleIndexChange,
    handleDeleteImage,
    handleRegisterMainImage,
  } = useModalContainerCardDetailImageSwiper();

  const handleDeleteButtonClick = () => {
    if (confirm('정말 삭제하시겠습니까?')) {
      handleDeleteImage();
    }
  };

  const handleRegisterMainImageButtonClick = () => {
    if (checkMainImage()) {
      alert('이미 메인 이미지로 등록되어 있습니다.');
      return;
    }

    if (confirm('메인 이미지로 등록하시겠습니까?')) {
      handleRegisterMainImage();
      slideToFirstImage();
      //TODO: 메인 이미지 등록 API 호출
    }
  };
  const slideToFirstImage = () => {
    swiperInstance?.slideTo(0);
  };

  return (
    <div
      aria-label="card-detail-image-swiper"
      className="w-1/2"
    >
      <CardImageSwiper
        imageList={mainFirstImageList}
        onIndexChange={handleIndexChange}
        onSwiperReady={handleSwiperReady}
      />
      <div
        aria-label="card-detail-image-button-group"
        className="flex"
      >
        <ButtonList className="flex w-full justify-around">
          <BaseButton
            variant="amber"
            onClick={handleDeleteButtonClick}
          >
            해당 사진 삭제
          </BaseButton>
          <BaseButton
            variant="skyblue"
            onClick={handleRegisterMainImageButtonClick}
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
