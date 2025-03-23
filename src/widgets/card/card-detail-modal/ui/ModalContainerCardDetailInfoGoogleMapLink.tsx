import { Card } from '@/shared/type';
import { ClipboardCopyButton } from '@/shared/ui';

const ModalContainerCardDetailInfoGoogleMapLink = ({
  googleMapLink,
}: {
  googleMapLink: Card['googleMapLink'];
}) => {
  return (
    <div
      aria-label="card-detail-google-map-link"
      className="flex justify-between gap-3"
    >
      <div
        aria-label="card-detail-title"
        className="whitespace-nowrap font-bold"
      >
        Google Map Link
      </div>
      <div
        aria-label="card-detail-content"
        className="max-w-md truncate"
      >
        {googleMapLink}
      </div>
      <ClipboardCopyButton
        copyText={googleMapLink}
        size="small"
      />
    </div>
  );
};

export default ModalContainerCardDetailInfoGoogleMapLink;
