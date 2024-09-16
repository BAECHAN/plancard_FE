import { BaseButton } from '@/shared/ui/Button/Base/BaseButton';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof BaseButton> = {
  title: 'Button/BaseButton',
  component: BaseButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    primary: { control: 'boolean', description: 'Primary 스타일' },
    backgroundColor: { control: 'color', description: '배경 색상' },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '버튼 크기',
    },
    label: { control: 'text', description: '버튼 텍스트' },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
