import { Card } from '@/shared/type';

const ModalContainerCardDetailInfoName = ({
  title,
}: {
  title: Card['title'];
}) => {
  return (
    <div
      aria-label="card-detail-info-name"
      className="flex justify-between"
    >
      <div
        aria-label="card-detail-title"
        className="font-bold"
      >
        Name
      </div>
      <div aria-label="card-detail-description">{title}</div>
    </div>
  );
};

export default ModalContainerCardDetailInfoName;
