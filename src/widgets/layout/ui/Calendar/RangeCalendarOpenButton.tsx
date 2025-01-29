import { useRangeCalendarStore } from '@/shared/store';
import { TagButton } from '@/shared/ui';
import { RangeCalendar } from '@/widgets/layout/ui';
import { useEffect } from 'react';
import { FaArrowRightLong, FaCalendarDay } from 'react-icons/fa6';

const RangeCalendarOpenButton = () => {
  const { openCalendar, isCalendarOpen, startDate, endDate, resetRangeDate } =
    useRangeCalendarStore();

  useEffect(function handleCalendarLifecycle() {
    openCalendar();

    return () => {
      resetRangeDate();
    };
  }, []);

  return (
    <>
      <TagButton onClick={openCalendar}>
        <span>{startDate?.toLocaleDateString()}</span>
        <span>
          <FaArrowRightLong />
        </span>
        <span>{endDate?.toLocaleDateString()}</span>
        <span>
          <FaCalendarDay />
        </span>
      </TagButton>
      {isCalendarOpen && <RangeCalendar />}
    </>
  );
};

export default RangeCalendarOpenButton;
