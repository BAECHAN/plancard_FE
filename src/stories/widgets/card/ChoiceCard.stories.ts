import { ChoiceCard } from '@/widgets/card/card-item/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof ChoiceCard> = {
  title: 'Widgets/Card/ChoiceCard',
  component: ChoiceCard,
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
} satisfies Meta<typeof ChoiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
  },
};
