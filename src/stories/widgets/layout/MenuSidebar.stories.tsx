import { MenuSidebar } from '@/widgets/layout/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuSidebar> = {
  title: 'Widgets/Layout/MenuSidebar',
  component: MenuSidebar,
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
} satisfies Meta<typeof MenuSidebar>;

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
