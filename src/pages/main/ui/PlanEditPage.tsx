import { usePreventLeave } from '@/shared/hooks';
import { BaseButton, Input } from '@/shared/ui';
import {
  Block,
  ContentContainer,
  GroupInBlock,
  MainContainer,
  RangeCalendarOpenButton,
} from '@/widgets/layout/ui';

export const PlanEditPage = () => {
  const { handleNavigateWithConfirm } = usePreventLeave();

  return (
    <MainContainer className="py-10">
      <ContentContainer>
        <Block label="content-nav">
          <BaseButton onClick={() => handleNavigateWithConfirm('/plans')}>
            목록
          </BaseButton>
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
              <div className="text-3xl">
                <Input
                  placeholder="제목 입력"
                  id="title"
                  align="center"
                />
              </div>
              <div className="flex justify-center">
                <RangeCalendarOpenButton />
              </div>
            </div>
          </GroupInBlock>
          <GroupInBlock label="plan-memo-button">
            <BaseButton>메모 보기</BaseButton>
          </GroupInBlock>
        </Block>
      </ContentContainer>
    </MainContainer>
  );
};
