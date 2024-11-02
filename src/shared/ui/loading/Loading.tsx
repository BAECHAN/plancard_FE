import { Size } from '@/shared/type';
import { BeatLoader } from 'react-spinners';

const override: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

type LoadingProps = {
  size: Size;
};

const Loading = ({ size }: LoadingProps) => {
  return (
    <BeatLoader
      color={'#3498db'}
      loading
      cssOverride={override}
      size={size === 'medium' ? 15 : size === 'small' ? 10 : 25}
    />
  );
};

export default Loading;
