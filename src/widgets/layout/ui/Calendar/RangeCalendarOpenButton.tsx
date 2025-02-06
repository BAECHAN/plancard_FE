import { useRangeCalendarStore } from '@/shared/store';
import { TagButton } from '@/shared/ui';
import { RangeCalendar } from '@/widgets/layout/ui';
import { FaArrowRightLong, FaCalendarDay } from 'react-icons/fa6';

const RangeCalendarOpenButton = () => {
  const { openCalendar, isOpen, confirmedRange } = useRangeCalendarStore();

  return (
    <>
      <TagButton onClick={openCalendar}>
        <span>{confirmedRange.from?.toLocaleDateString()}</span>
        <span>
          <FaArrowRightLong />
        </span>
        <span>{confirmedRange.to?.toLocaleDateString()}</span>
        <span>
          <FaCalendarDay />
        </span>
      </TagButton>
      {isOpen && <RangeCalendar />}
    </>
  );
};

export default RangeCalendarOpenButton;
