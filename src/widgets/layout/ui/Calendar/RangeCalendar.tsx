import { useKeydown } from '@/shared/hooks';
import { useRangeCalendarStore } from '@/shared/store';
import { BaseButton, ESCButton } from '@/shared/ui';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

const RangeCalendar = () => {
  const { draftRange, closeCalendar, handleConfirm, handleDateChange } =
    useRangeCalendarStore();

  useKeydown('Escape', closeCalendar);

  return (
    <div className="calendar-overlay">
      <div className="calendar-container">
        <div className="flex w-full justify-end">
          <ESCButton onClick={closeCalendar} />
        </div>
        {draftRange.from && draftRange.to && (
          <div className="selected-range">
            {format(draftRange.from, 'M월 d일')} →{' '}
            {format(draftRange.to, 'M월 d일')}
          </div>
        )}
        <DatePicker
          selected={draftRange.from}
          onChange={dates =>
            handleDateChange(dates as [Date | null, Date | null])
          }
          startDate={draftRange.from}
          endDate={draftRange.to}
          selectsRange
          inline
        />
        <BaseButton onClick={handleConfirm}>선택</BaseButton>
      </div>
    </div>
  );
};

export default RangeCalendar;
