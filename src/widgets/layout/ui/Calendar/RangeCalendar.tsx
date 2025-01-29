import { useKeydown } from '@/shared/hooks';
import { useRangeCalendarStore } from '@/shared/store';
import { BaseButton, ESCButton } from '@/shared/ui';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

const RangeCalendar = () => {
  const { closeCalendar, startDate, endDate, setStartDate, setEndDate } =
    useRangeCalendarStore();

  useKeydown('Escape', closeCalendar);

  return (
    <div className="calendar-overlay">
      <div className="calendar-container">
        <div className="flex w-full justify-end">
          <ESCButton onClick={closeCalendar} />
        </div>
        <div className="calendar-header">Jan 2025</div>
        {startDate && endDate && (
          <div className="selected-range">
            {format(startDate, 'M월 d일')} → {format(endDate, 'M월 d일')}
          </div>
        )}
        <DatePicker
          selected={startDate}
          onChange={dates => {
            const [start, end] = dates as [Date, Date];
            setStartDate(start);
            setEndDate(end);
          }}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />
        <BaseButton onClick={closeCalendar}>선택</BaseButton>
      </div>
    </div>
  );
};

export default RangeCalendar;
