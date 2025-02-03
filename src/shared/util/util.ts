import { DateRange, Size } from '@/shared/type';
import { differenceInDays, eachDayOfInterval } from 'date-fns';

type DateRangeInfo = {
  totalDays: number;
  dateList: Date[];
};

export class Util {
  constructor() {}
  /**
   * 쿠키에서 특정 이름의 값을 가져오는 함수
   * @param name 쿠키 이름
   * @returns 쿠키 값 또는 undefined
   */
  static getCookie(name: string): string | undefined {
    const matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' +
          name.replace(/([.$?*|{}()\\[\]\\/\\+^])/g, '\\$1') +
          '=([^;]*)',
      ),
    );

    console.log('document.cookie : ', document.cookie);
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  /**
   *
   * @param date
   * @returns string `8.13/토` 형식으로 변환
   */
  static formatDateForDayPlan = (date: Date): string => {
    // 월, 일, 요일 정보를 추출
    const month = date?.getMonth() + 1; // 월은 0부터 시작하므로 +1
    const day = date?.getDate();
    const dayOfWeek = date?.getDay(); // 요일 (0: 일요일, 1: 월요일, ... 6: 토요일)

    // 요일 배열을 선언하여 숫자를 요일 문자열로 변환
    const dayOfWeekMap = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeekStr = dayOfWeekMap[dayOfWeek]; // 요일을 한글로 변환

    // "8.13/토" 형식으로 변환
    return `${month}.${day}/${dayOfWeekStr}`;
  };

  /**
   * DateRange 타입의 날짜 범위로부터 총 일수와 날짜 목록을 반환하는 유틸리티 함수
   * @param range DateRange 타입의 날짜 범위
   * @returns DateRangeInfo 타입의 날짜 정보
   */
  static getDateRangeInfo = (range: DateRange): DateRangeInfo => {
    const { from, to } = range;

    // 시작일과 종료일이 모두 존재하는 경우에만 계산
    if (from && to) {
      const totalDays = differenceInDays(to, from) + 1;
      const dateList = eachDayOfInterval({ start: from, end: to });

      return {
        totalDays,
        dateList,
      };
    }

    // 유효하지 않은 날짜 범위인 경우 기본값 반환
    return {
      totalDays: 0,
      dateList: [],
    };
  };

  /**
   * @deprecated 테스트 필요
   *
   * @description obj1과 obj2의 키를 비교하여 공통적으로 존재하는 키의 값이 같은지 여부를 반환하는 함수
   * 원시타입 만 비교 가능
   * @param obj1
   * @param obj2
   * @returns boolean
   */
  static compareCommonKeys = <T>(
    obj1: Record<string, T>,
    obj2: Record<string, T>,
  ): boolean => {
    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

    for (const key of keys) {
      if (key in obj1 && key in obj2 && obj1[key] !== obj2[key]) {
        return false;
      }
    }

    return true;
  };

  /**
   * @description 첫 글자를 대문자로 변환하는 함수
   * @param string
   * @returns
   */
  static capitalizeFirstLetter = (str: string) => {
    return str.replace(/^\w/, c => c.toUpperCase());
  };

  /**
   * @description size를 받아서 한단계 작은 size로 변환하는 함수
   * @param size
   * @returns 'large' -> 'medium', 'medium' -> 'small', 'small' -> 'xSmall'
   */
  static convertSizeToDownSize = (size: Size) => {
    switch (size) {
      case 'large':
        return 'medium';
      case 'medium':
        return 'small';
      case 'small':
        return 'xSmall';
    }
  };

  /**
   * @description size를 받아서 한단계 큰 size로 변환하는 함수
   * @param size
   * @returns 'small' -> 'medium', 'medium' -> 'large', 'large' -> 'xLarge'
   */
  static convertSizeToUpSize = (size: Size) => {
    switch (size) {
      case 'small':
        return 'medium';
      case 'medium':
        return 'large';
      case 'large':
        return 'xLarge';
    }
  };

  /**
   * @description url을 새 탭에서 열어주는 함수
   * @param url
   *
   */
  static openInNewTab = (url: string): void => {
    window.open(url, '_blank');
  };

  /**
   * @description 클립보드에 텍스트를 복사하는 함수
   * @param text
   * @returns
   */
  static copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      console.error('Failed to copy text to clipboard: ', error);
      return false;
    }
  };
}
