import { BaseAlert } from '@/shared/ui/Alert/BaseAlert';
import { BaseButton } from '@/shared/ui/Button/BaseButton';
import type { Meta, StoryObj } from '@storybook/react';
import { PiWarningCircleFill } from 'react-icons/pi';

const meta: Meta<typeof BaseAlert> = {
  title: 'Alert/BaseAlert',
  component: BaseAlert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'skyblue', 'cream', 'navy', 'gray', 'amber'],
      description: 'Alert 색상',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Alert 크기',
    },
  },
  args: {
    variant: 'cream',
    size: 'medium',
    children: <span>[ 플랜 ]에서 넘어온 [ 카드 선택 ] 화면입니다.</span>,
  },
} satisfies Meta<typeof BaseAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const WithIcon: Story = {
  args: {
    size: 'medium',
    children: (
      <>
        <PiWarningCircleFill className="text-2xl" />
        <span>[ 플랜 ]에서 넘어온 [ 카드 선택 ] 화면입니다.</span>
      </>
    ),
  },
};

export const WithIconAndButton: Story = {
  args: {
    size: 'medium',
    children: (
      <>
        <PiWarningCircleFill className="text-2xl" />
        <span>[ 플랜 ]에서 넘어온 [ 카드 선택 ] 화면입니다.</span>
        <BaseButton
          onClick={() => {}}
          variant="primary"
          size="small"
        >
          카드 선택 완료
        </BaseButton>
      </>
    ),
  },
};
