import { DateRange } from '@/shared/type';
import { create } from 'zustand';

interface RangeCalendarStore {
  // 최종 확정된 날짜 범위
  confirmedRange: DateRange;
  // 현재 선택 중인 임시 날짜 범위
  draftRange: DateRange;

  isOpen: boolean;

  // 기본 액션들
  openCalendar: () => void;
  closeCalendar: () => void;

  // 날짜 범위 관련 액션들
  setConfirmedRange: (range: DateRange) => void;
  setDraftRange: (range: DateRange) => void;

  // 사용자 인터랙션 핸들러
  handleConfirm: () => void;
  handleCancel: () => void;
  handleDateChange: (dates: [Date | null, Date | null]) => void;
}

const useRangeCalendarStore = create<RangeCalendarStore>(set => ({
  confirmedRange: {
    from: null,
    to: null,
  },
  draftRange: {
    from: null,
    to: null,
  },
  isOpen: false,

  openCalendar: () =>
    set(state => ({
      isOpen: true,
      // 캘린더를 열 때 확정된 날짜를 임시 선택 상태로 복사
      draftRange: { ...state.confirmedRange },
    })),

  closeCalendar: () => set({ isOpen: false }),

  setConfirmedRange: range => set({ confirmedRange: range }),

  setDraftRange: range => set({ draftRange: range }),

  handleConfirm: () =>
    set(state => ({
      // 임시 선택 상태를 확정 상태로 저장
      confirmedRange: { ...state.draftRange },
      isOpen: false,
    })),

  handleCancel: () =>
    set({
      draftRange: { from: null, to: null },
      isOpen: false,
    }),

  handleDateChange: ([start, end]) =>
    set({
      draftRange: {
        from: start,
        to: end,
      },
    }),
}));

export default useRangeCalendarStore;
