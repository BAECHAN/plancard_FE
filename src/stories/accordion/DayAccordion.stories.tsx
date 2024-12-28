import { DayAccordion } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof DayAccordion> = {
  title: 'Accordion/DayAccordion',
  component: DayAccordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '메뉴 사이드바 크기',
    },
  },
} satisfies Meta<typeof DayAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: <div>데이 플랜 내용</div>,
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: <div>데이 플랜 내용</div>,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: <div>데이 플랜 내용</div>,
    size: 'large',
  },
};

export const HasTitle: Story = {
  args: {
    children: <div>데이 플랜 내용</div>,
    title: '1일차 나의 후쿠오카 여행',
    size: 'medium',
  },
};

export const HasTitleMultiple: Story = {
  render: args => {
    return (
      <>
        <DayAccordion
          {...args}
          title={'1일차 나의 후쿠오카 여행'}
        >
          {' '}
          <div>데이 플랜 내용</div>
        </DayAccordion>
        <DayAccordion
          {...args}
          title={'2일차 나의 후쿠오카 여행'}
        >
          {' '}
          <div>데이 33플랜 내용</div>
        </DayAccordion>
      </>
    );
  },
  args: {
    title: '타이틀',
    size: 'medium',
  },
};

// 상태를 관리하는 스토리 정의
export const OnSaveTitle: Story = {
  render: args => {
    const [title, setTitle] = useState(args.title);

    const handleSaveTitle = (newTitle: string) => {
      setTitle(newTitle);
    };

    return (
      <DayAccordion
        {...args}
        title={title}
        onSaveTitle={handleSaveTitle} // 상태 관리
      />
    );
  },
  args: {
    title: '타이틀',
    size: 'medium',
  },
};
