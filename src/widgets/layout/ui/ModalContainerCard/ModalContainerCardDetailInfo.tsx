import { Card, MyCard } from '@/shared/type';
import ModalContainerCardDetailInfoDescription from '@/widgets/layout/ui/ModalContainerCard/ModalContainerCardDetailInfoDescription';
import ModalContainerCardDetailInfoGoogleMapLink from '@/widgets/layout/ui/ModalContainerCard/ModalContainerCardDetailInfoGoogleMapLink';
import ModalContainerCardDetailInfoMyMemo from '@/widgets/layout/ui/ModalContainerCard/ModalContainerCardDetailInfoMyMemo';
import ModalContainerCardDetailInfoMyTag from '@/widgets/layout/ui/ModalContainerCard/ModalContainerCardDetailInfoMyTag';
import ModalContainerCardDetailInfoName from '@/widgets/layout/ui/ModalContainerCard/ModalContainerCardDetailInfoName';

const ModalContainerCardDetailInfo = ({
  title,
  cardId,
  googleMapLink,
  description,

  myMemo,
  myTagList,
}: {
  title: Card['title'];
  cardId: Card['cardId'];
  googleMapLink: Card['googleMapLink'];
  description: Card['description'];

  myMemo?: MyCard['myMemo'];
  myTagList?: MyCard['myTagList'];
}) => {
  return (
    <div
      aria-label="card-detail-info"
      className="flex flex-col gap-3 w-1/2 border rounded-2xl p-4 h-full"
    >
      <ModalContainerCardDetailInfoName title={title} />
      <ModalContainerCardDetailInfoGoogleMapLink
        googleMapLink={googleMapLink}
      />
      <ModalContainerCardDetailInfoDescription description={description} />
      {myTagList && <ModalContainerCardDetailInfoMyTag myTagList={myTagList} />}
      {myMemo && <ModalContainerCardDetailInfoMyMemo myMemo={myMemo} />}
    </div>
  );
};

export default ModalContainerCardDetailInfo;
