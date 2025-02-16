import { CardPickPage } from '@/pages/main/ui';
import { CardInPlan } from '@/pages/plan/ui';
import PlanDetailMenuDropdown from '@/pages/plan/ui/PlanDetailMenuDropdown';
import { usePreventLeave } from '@/shared/hooks';
import {
  CommonPickViewInPlanPage,
  usePickViewStore,
  useRangeCalendarStore,
} from '@/shared/store';
import { BaseButton, DayAccordion, Input } from '@/shared/ui';
import { Util } from '@/shared/util';
import {
  Block,
  ContentContainer,
  GroupInBlock,
  MainContainer,
  RangeCalendarOpenButton,
} from '@/widgets/layout/ui';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PlanDetailPage = () => {
  usePreventLeave();

  const navigate = useNavigate();
  const { pickView, updatePickView, resetPickViewAllData } = usePickViewStore();
  const [planTitle, setPlanTitle] = useState<string>('');

  const handlePlanTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlanTitle(e.target.value);
  };

  const handlePlanTitleReset = () => {
    setPlanTitle('');
  };

  const { confirmedRange, openCalendar, handleCancel } =
    useRangeCalendarStore();

  useEffect(() => {
    openCalendar();
    updatePickView({
      viewMode: 'PLAN_DETAIL',
    });

    return () => {
      handleCancel();
      resetPickViewAllData();
    };
  }, []);

  const { totalDays, dateList } = Util.getDateRangeInfo(confirmedRange);

  /**
   * 페이지 상태 변경
   * @param viewMode 페이지 뷰 모드
   * @param selectedDayIndex 선택된 날짜 인덱스. day1은 0, day2는 1, ...
   * TODO: 인덱스로 관리하게되면 순서 변경 시 문제가 생길 수 있음. 추후 순서 관리 방법 고려 필요
   */
  const handlePickPageOpen = ({
    viewMode,
    selectedDayIndex,
  }: CommonPickViewInPlanPage) => {
    updatePickView({
      viewMode: viewMode,
      selectedDayIndex,
    });
  };

  return (
    <MainContainer
      label="plan-detail-page"
      className="gap-4"
    >
      {pickView.viewMode === 'PLAN_DETAIL' && (
        <ContentContainer label="plan-detail-page-content">
          <Block
            label="content-nav"
            className="flex justify-between"
          >
            <BaseButton onClick={() => navigate('/plans/my')}>목록</BaseButton>
            <BaseButton>저장</BaseButton>
          </Block>
          <Block
            label="content-header"
            className="justify-between"
          >
            <GroupInBlock
              label="plan-title-input"
              className="flex-1"
            >
              <div className="flex flex-1 flex-col justify-center">
                <div className="flex justify-center">
                  <div className="w-1/3 text-3xl">
                    <Input
                      placeholder="제목 입력"
                      id="title"
                      align="center"
                      value={planTitle}
                      onChange={handlePlanTitleChange}
                      onReset={handlePlanTitleReset}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <RangeCalendarOpenButton />
                </div>
              </div>
            </GroupInBlock>
            <GroupInBlock label="plan-button-group">
              <PlanDetailMenuDropdown />
            </GroupInBlock>
          </Block>
          <Block label="content-body">
            {totalDays > 0 && (
              <div className="flex w-full flex-col gap-2">
                {Array.from({ length: totalDays }).map((_, index) => (
                  <div key={index}>
                    <DayAccordion
                      onSaveTitle={() => {}}
                      optionDateList={dateList}
                      index={index}
                      onChangeDate={() => {}}
                    >
                      <Block label="day-card-pick-button">
                        {index !== 3 ? (
                          <GroupInBlock label="day-card-pick-button">
                            <BaseButton
                              onClick={() =>
                                handlePickPageOpen({
                                  viewMode: 'EXPLORE_CARD_PICK',
                                  selectedDayIndex: index,
                                })
                              }
                            >
                              카드 선택
                            </BaseButton>
                            <BaseButton
                              onClick={() =>
                                handlePickPageOpen({
                                  viewMode: 'EXPLORE_DAY_PICK',
                                  selectedDayIndex: index,
                                })
                              }
                            >
                              데이 선택
                            </BaseButton>
                          </GroupInBlock>
                        ) : (
                          <Block
                            label="day-card-pick-button"
                            className="flex w-fit flex-col justify-center"
                          >
                            <CardInPlan />
                          </Block>
                        )}
                      </Block>
                    </DayAccordion>
                  </div>
                ))}
              </div>
            )}
          </Block>
        </ContentContainer>
      )}
      {pickView.viewMode === 'MY_CARD_PICK' && <CardPickPage />}
      {pickView.viewMode === 'EXPLORE_CARD_PICK' && <CardPickPage />}
      {/* {pageState.viewMode === 'DAY_PICK' && <DayPickPage />} */}
    </MainContainer>
  );
};
