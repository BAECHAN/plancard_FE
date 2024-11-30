import { SortingTitleButton } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof SortingTitleButton> = {
  title: 'Button/SortingTitleButton',
  component: SortingTitleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '텍스트 내용',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '텍스트 크기',
    },
    onClick: { action: 'clicked', description: '텍스트 클릭 이벤트' },
  },
  args: { onClick: fn(), title: 'Title', size: 'medium' },
} satisfies Meta<typeof SortingTitleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};
