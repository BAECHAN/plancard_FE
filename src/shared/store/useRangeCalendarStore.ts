import { create } from 'zustand';

type RangeCalendarStore = {
  isCalendarOpen: boolean;
  openCalendar: () => void;
  closeCalendar: () => void;

  startDate: Date | null;
  setStartDate: (date: Date) => void;

  endDate: Date | null;
  setEndDate: (date: Date) => void;

  resetRangeDate: () => void;
};

const useRangeCalendarStore = create<RangeCalendarStore>(set => ({
  isCalendarOpen: false,
  openCalendar: () => set({ isCalendarOpen: true }),
  closeCalendar: () => set({ isCalendarOpen: false }),

  startDate: null,
  setStartDate: (date: Date) => set({ startDate: date }),

  endDate: null,
  setEndDate: (date: Date) => set({ endDate: date }),

  resetRangeDate: () => set({ startDate: null, endDate: null }),
}));

export default useRangeCalendarStore;
