import PlanDetailMenuDropdown from '@/pages/plan/ui/PlanDetailMenuDropdown';
import { usePreventLeave } from '@/shared/hooks';
import { BaseButton, Input } from '@/shared/ui';
import {
  Block,
  ContentContainer,
  GroupInBlock,
  MainContainer,
  RangeCalendarOpenButton,
} from '@/widgets/layout/ui';
import { useState } from 'react';

export const PlanDetailPage = () => {
  const { handleNavigateWithConfirm } = usePreventLeave();

  const [planTitle, setPlanTitle] = useState<string>('');

  const handlePlanTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlanTitle(e.target.value);
  };

  const handlePlanTitleReset = () => {
    setPlanTitle('');
  };

  return (
    <MainContainer className="py-10">
      <ContentContainer>
        <Block
          label="content-nav"
          className="flex justify-between"
        >
          <BaseButton onClick={() => handleNavigateWithConfirm('/plans/my')}>
            목록
          </BaseButton>
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
      </ContentContainer>
    </MainContainer>
  );
};
