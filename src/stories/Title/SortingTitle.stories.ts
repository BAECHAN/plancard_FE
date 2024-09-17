import { SortingTitle } from '@/shared/ui/Title/SortingTitle';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof SortingTitle> = {
  title: 'Title/SortingTitle',
  component: SortingTitle,
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
    active: {
      control: 'boolean',
      description: '활성화 여부',
    },
    onClick: { action: 'clicked', description: '텍스트 클릭 이벤트' },
  },
  args: { onClick: fn(), title: 'Title', size: 'medium', active: false },
} satisfies Meta<typeof SortingTitle>;

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

export const Active: Story = {
  args: {
    active: true,
  },
};
