import { ESCButton } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof ESCButton> = {
  title: 'Button/ESCButton',
  component: ESCButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '버튼 크기',
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ESCButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};
