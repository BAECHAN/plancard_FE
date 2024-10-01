import { SelectCard } from '@/widgets/card';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof SelectCard> = {
  title: 'Widgets/Card/SelectCard',
  component: SelectCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'skyblue', 'navy', 'gray', 'amber', 'periwinkle'],
      description: '버튼 색상',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '컨텐츠 크기',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof SelectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
  },
};
