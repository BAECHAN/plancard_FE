import { SortingTitle } from '@/shared/ui/Title/Sorting/SortingTitle';
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
  args: { onClick: fn() },
} satisfies Meta<typeof SortingTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    title: 'Title',
    size: 'medium',
    active: false,
  },
};

export const Small: Story = {
  args: {
    title: 'Title',
    size: 'small',
    active: false,
  },
};

export const Large: Story = {
  args: {
    title: 'Title',
    size: 'large',
    active: false,
  },
};

export const Active: Story = {
  args: {
    title: 'Title',
    size: 'medium',
    active: true,
  },
};
