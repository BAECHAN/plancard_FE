import TrashButton from '@/shared/ui/button/IconButton/TrashButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TrashButton> = {
  title: 'Button/TrashButton',
  component: TrashButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '아이콘 버튼 크기',
    },
  },
} satisfies Meta<typeof TrashButton>;

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
