import { MenuItem } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuItem> = {
  title: 'Sidebar/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '메뉴 크기',
    },
    active: { control: 'boolean', description: '메뉴 활성화 여부' },
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: <b>플랜</b>,
    size: 'small',
    active: true,
  },
};

export const Medium: Story = {
  args: {
    children: <b>플랜</b>,
    size: 'medium',
    active: true,
  },
};

export const Large: Story = {
  args: {
    children: <b>플랜</b>,
    size: 'large',
    active: true,
  },
};

export const Inactive: Story = {
  args: {
    children: <b>플랜</b>,
    size: 'medium',
    active: false,
  },
};
